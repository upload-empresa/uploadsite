import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useContext, useReducer, useState, ChangeEvent } from 'react';
import { getError } from '../../../utils/error';
import { Store } from '../../../utils/Store';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { MainPostBlog } from "../../../components/Main";

//@ts-ignore
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
}

//@ts-ignore
function PostEdit({ params }) {
  console.log(params);
  const [value, setValueR] = useState("");
  const getValue = (value: React.SetStateAction<string>) => {
    setValueR(value);
  };
  const postId = params.id;
  console.log(postId);
  const { state } = useContext(Store);
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { userInfo } = state;
  //@ts-ignore
  useEffect(() => {
    if (!userInfo) {
      return router.push('/login');
    } else {
      const fetchData = async () => {
        try {
          dispatch({ type: 'FETCH_REQUEST' });
          const { data } = await axios.get(`/api/admin/postBlog/${postId}`, {
            headers: { authorization: `Bearer ${userInfo.token}` },
          });
          dispatch({ type: 'FETCH_SUCCESS' });
          setValue('title', data.title);
          setValue('slug', data.slug);
          setValue('author', data.author);
          setValue('resumo', data.resumo);
          setValue('image', data.image);
          setValue('featuredImage', data.featuredImage);
          setIsFeatured(data.isFeatured);
          setValue('category', data.category);
          setValue('data', data.data);
          setValue('perfil', data.perfil);
          setValue('body', data.body);
          //setValue('description', data.description);
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
        }
      };
      fetchData();
    }
  }, []);
  //@ts-ignore
  const uploadHandler = async (e, imageField = 'image') => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/api/admin/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      enqueueSnackbar('Arquivo enviado com sucesso', { variant: 'success' });
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  const submitHandler = async ({
    //@ts-ignore
    title,
    //@ts-ignore
    slug,
    //@ts-ignore
    author,
    //@ts-ignore
    resumo,
    //@ts-ignore
    category,
    //@ts-ignore
    data,
    //@ts-ignore
    image,
    //@ts-ignore
    featuredImage,
    //@ts-ignore
    perfil,
    //@ts-ignore
    body,
    //@ts-ignore
    //description,
  }) => {
    closeSnackbar();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `/api/admin/postBlog/${postId}`,
        {
          title,
          slug,
          author,
          resumo,
          category,
          data,
          image,
          isFeatured,
          featuredImage,
          perfil,
          body,
          //description,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: 'UPDATE_SUCCESS' });
      enqueueSnackbar('Post editado com sucesso', { variant: 'success' });
      router.push('/admin');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  const [isFeatured, setIsFeatured] = useState(false);


  return (
    <>
      <MainPostBlog uploadHandler={uploadHandler} submitHandler={submitHandler} handlerSubmit={handleSubmit} 
      errors={errors}/>
    </>
  )
};

//@ts-ignore
export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}

export default dynamic(() => Promise.resolve(PostEdit), { ssr: false });

