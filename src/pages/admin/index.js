import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useReducer } from "react";
import { getError } from "../../utils/error";
import { Store } from "../../u../../utils/Store";
import { useSnackbar } from "notistack";
import { ButtonAdd } from "../../components/Button";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { HeadingAdminBlog } from "../../components/Heading";
import { Sidebar } from "../../components/Sidebar";
import { TableBlog } from "../../components/Table";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, posts: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreate: true };
    case "CREATE_SUCCESS":
      return { ...state, loadingCreate: false };
    case "CREATE_FAIL":
      return { ...state, loadingCreate: false };
    case "DELETE_REQUEST":
      return { ...state, loadingDelete: true };
    case "DELETE_SUCCESS":
      return { ...state, loadingDelete: false, successDelete: true };
    case "DELETE_FAIL":
      return { ...state, loadingDelete: false, successDelete: false };
    case "DELETE_RESET":
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      state;
  }
}

function AdminPosts() {
  const { state } = useContext(Store);
  const router = useRouter();
  const { userInfo } = state;

  const [{ posts, successDelete }, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: "",
  });

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`api/admin/postBlog`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const { enqueueSnackbar } = useSnackbar();

  const createHandler = async () => {
    if (!window.confirm("Tem certeza que deseja criar um novo post?")) {
      return;
    }
    try {
      dispatch({ type: "CREATE_REQUEST" });
      const { data } = await axios.post(
        `/api/admin/postBlog`,
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: "CREATE_SUCCESS" });
      enqueueSnackbar("Post criado com sucesso!", { variant: "success" });
      router.push(`/admin/post/${data.post._id}`);
    } catch (err) {
      dispatch({ type: "CREATE_FAIL" });
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  const deleteHandler = async (postId) => {
    if (!window.confirm("Tem certeza que deseja deletar? ")) {
      return;
    }
    try {
      dispatch({ type: "DELETE_REQUEST" });
      await axios.delete(`/api/admin/postBlog/${postId}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: "DELETE_SUCCESS" });
      enqueueSnackbar("Post deletado com sucesso!", { variant: "success" });
    } catch (err) {
      dispatch({ type: "DELETE_FAIL" });
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  return (
    <>
      <HStack align={"stretch"} w="100%">
        <Sidebar w={"15%"} />

        <TableContainer w={"85%"} py={8} px={6}>
          <Stack>
            <HStack justify={"space-between"}>
              <HeadingAdminBlog />
              <ButtonAdd text={"Novo Post"} onClick={() => createHandler()} />
            </HStack>
            <Table>
              <Thead>
                <Tr>
                  <Th
                    color={"#B5B7C0"}
                    fontSize={{
                      "2xl": "18px",
                      xl: "16px",
                      lg: "14px",
                      xxs: "14px",
                    }}
                    fontWeight={500}
                  >
                    Ações
                  </Th>
                  <Th
                    color={"#B5B7C0"}
                    fontSize={{
                      "2xl": "18px",
                      xl: "16px",
                      lg: "14px",
                      xxs: "14px",
                    }}
                    fontWeight={500}
                  >
                    ID
                  </Th>
                  <Th
                    textAlign={"start"}
                    color={"#B5B7C0"}
                    fontSize={{
                      "2xl": "18px",
                      xl: "16px",
                      lg: "14px",
                      xxs: "14px",
                    }}
                    fontWeight={500}
                  >
                    Título
                  </Th>
                  <Th
                    color={"#B5B7C0"}
                    fontSize={{
                      "2xl": "18px",
                      xl: "16px",
                      lg: "14px",
                      xxs: "14px",
                    }}
                    fontWeight={500}
                  >
                    Data
                  </Th>
                </Tr>
              </Thead>
              {posts.map((post) => (
                <TableBlog
                  key={post._id}
                  data={post}
                  funcaodelete={() => deleteHandler(post._id)}
                />
              ))}
            </Table>
          </Stack>
        </TableContainer>
      </HStack>
    </>
  );
}

export default dynamic(() => Promise.resolve(AdminPosts), { ssr: false });
