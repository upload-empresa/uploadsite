import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useEffect, useContext, useReducer } from "react";
import { getError } from "../../utils/error";
import { Store } from "../../u../../utils/Store";
import { useSnackbar } from "notistack";
import { MainBlog } from "../../components/Main";

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
  const  state  = useContext(Store);
  const router = useRouter();
  const userInfo  = state;

  const [{ posts, successDelete }, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: "",
  }); //conseguir puxar os posts e fazer a rota do id

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
    if (!window.confirm("Tem certeza? create")) {
      return console.log("deu merda");
    }
    try {
      dispatch({ type: "CREATE_REQUEST" });
      const { data } = await axios.post(
        `/api/admin/postBlog`, // Essa rota leva para a index do postBlog, criando um post genérico.
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: "CREATE_SUCCESS" });
      enqueueSnackbar("Post criado com sucesso!", { variant: "success" });
      router.push(`/admin/post/${data.post._id}`); //A rota direciona para a parte de edição do post que foi criado
    } catch (err) {
      dispatch({ type: "CREATE_FAIL" });
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  const deleteHandler = async (postId) => {
    if (!window.confirm("Tem certeza?")) {
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
      enqueueSnackbar(getError(err), {variant: 'eror'})
    }
  };
  
  return(
    <>
      <MainBlog posts={posts} href={`/admin/post/${posts._id}`} onClickCreate={createHandler()} onClickDelete={() => deleteHandler(posts._id)}/>
    </>
  )
};


export default dynamic(() => Promise.resolve(AdminPosts), { ssr: false });