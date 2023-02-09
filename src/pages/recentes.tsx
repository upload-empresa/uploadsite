import { Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react"

import { CardBlogV } from "../components/Card/cardblogv"

import db from '../utils/db';
import Post from '../models/Post';

export default function Recentes(props: { featuredPosts: any; }) {
    const { featuredPosts } = props
    return (
        <Stack
            as="main"
            py={{ base: 10, md: 15, lg: 20 }}
            px={{ base: 6, md: 8, lg: 12 }}
            spacing={10}
        >
            <Heading
                as="h1"
                fontWeight={500}
            >
                Posts <Text as="span" color={"#2FACFA"} >Recentes</Text>
            </Heading>
            <Grid
                templateColumns='repeat(3, 1fr)'
                gap={6}
            >
                {featuredPosts.map((post: any) => (
                    <GridItem>
                        <CardBlogV title={post.title} author={post.author} body={post.body} />
                    </GridItem>
                ))}
                <GridItem>
                    {/* <CardBlogV />
                    <CardBlogV />
                    <CardBlogV /> */}
                </GridItem>
                <GridItem>
                    {/* <CardBlogV />
                    <CardBlogV />
                    <CardBlogV /> */}
                </GridItem>
            </Grid>
        </Stack>
    )
}

export const getServerSideProps = async () => {
    await db.connect();
    const featuredPostsDocs = await Post.find({}, '-reviews')
        .lean()
        .sort({
            rating: -1,
        })
        .limit(10);
    await db.disconnect();
    return {
        props: {
            featuredPosts: featuredPostsDocs.map(db.convertDocToObj)
        },
    }
}