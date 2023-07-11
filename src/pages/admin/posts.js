import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { useEffect, useContext, useReducer } from 'react';
import {
  TableContainer,
  Table,
  TableCaption,
  Button,
  Icon,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { getError } from '../../utils/error';
import { MdAdd, MdModeEdit, MdOutlineDelete } from 'react-icons/md';
import { Store } from '../../utils/Store';
import { useSnackbar } from 'notistack';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, posts: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
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
    error: '',
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/posts`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const { enqueueSnackbar } = useSnackbar();
  const createHandler = async () => {
    if (!window.confirm('Tem certeza?')) {
      return;
    }
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        `/api/admin/posts`,
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'CREATE_SUCCESS' });
      enqueueSnackbar('Post criado com sucesso!', { variant: 'success' });
      router.push(`/admin/post/${data.post._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  const deleteHandler = async (postId) => {
    if (!window.confirm('Tem certeza?')) {
      return;
    }
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/admin/posts/${postId}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: 'DELETE_SUCCESS' });
      enqueueSnackbar('Post deletado com sucesso!', { variant: 'success' });
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  return (
    <>
      <TableContainer px={24} py={7} mb="3%">
        <Heading>Todos os Posts</Heading>
        <Table variant="simple">
          <TableCaption placement="top" textAlign="right">
            <Button onClick={createHandler} colorScheme="green">
              <Icon as={MdAdd} pr={1} fontSize="28px" />
              <Text fontSize="16px">Adicionar</Text>
            </Button>
          </TableCaption>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>TITULO</Th>
                  <Th>AÇÕES</Th>
                </Tr>
              </Thead>
              <Tbody>
                {posts.map((post) => (
                  <Tr key={post._id}>
                    <Td>{post.title}</Td>
                    <Td>
                      <NextLink href={`/admin/post/${post._id}`} passHref>
                        <Button
                          bg="black"
                          color="white"
                          _hover={{ bg: 'black' }}
                        >
                          <Icon as={MdModeEdit} fontSize="28px" />
                        </Button>
                      </NextLink>{' '}
                      <Button
                        bg="red"
                        color="white"
                        _hover={{ bg: 'red' }}
                        onClick={() => deleteHandler(post._id)}
                      >
                        <Icon as={MdOutlineDelete} fontSize="28px" />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Table>
      </TableContainer>
    </>
  );
}

export default dynamic(() => Promise.resolve(AdminPosts), { ssr: false });
