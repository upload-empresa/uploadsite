/* eslint-disable jsx-a11y/alt-text */
import { Heading, Stack, HStack, Text } from '@chakra-ui/react';
import { Imagens } from '../../components/SEO/images';
import Post from '../../models/Post';
import db from '../../utils/db';
import axios from 'axios';
import { Store } from '../../utils/Store';
import { getError } from '../../utils/error';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';

export default function PostBlog(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { post } = props;
  const { enqueueSnackbar } = useSnackbar();

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `/api/posts/${post._id}/reviews`,
        {
          rating,
          comment,
        },
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      setLoading(false);
      enqueueSnackbar('Review submitted successfully', { variant: 'success' });
      fetchReviews();
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`/api/posts/${post._id}/reviews`);
      setReviews(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <Stack px={{ base: 6, md: 8, lg: 12 }} pt={{ base: 10, md: 15, lg: 20 }}>
      <Stack>
        <Heading as="h2" fontSize={'22px'} fontWeight={800} lineHeight={'30px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Heading>
        <HStack justify={'space-between'}>
          <HStack w={'50%'}>
            <Imagens
              tam={'10%'}
              path={'/images/iba.jpg'}
              description={'Imagem genérica'}
              tamw={'356'}
              tamh={'200'}
              borderRadius={'full'}
            />
            <Text
              as="p"
              fontSize={'14px'}
              fontWeight={500}
              lineHeight={'22px'}
              color={'#171923'}
            >
              {post.author}
            </Text>
          </HStack>
          <Text
            as="p"
            fontSize={'14px'}
            fontWeight={500}
            lineHeight={'22px'}
            color={'#4a5568'}
          >
            12 Jan | Leitura: 10min
          </Text>
        </HStack>
        <Imagens
          tam={'100%'}
          path={'/images/iba.jpg'}
          description={'Imagem genérica'}
          tamw={'356'}
          tamh={'200'}
        />
      </Stack>
    </Stack>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const post = await Post.findOne({ slug }, '-reviews').lean();
  await db.disconnect();
  return {
    props: {
      post: db.convertDocToObj(post),
    },
  };
}
