import { Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react"

import { CardBlogV } from "../components/Card/cardblogv"

export default function Recentes() {
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
                <GridItem>
                    <CardBlogV />
                    <CardBlogV />
                    <CardBlogV />
                </GridItem>
                <GridItem>
                    <CardBlogV />
                    <CardBlogV />
                    <CardBlogV />
                </GridItem>
                <GridItem>
                    <CardBlogV />
                    <CardBlogV />
                    <CardBlogV />
                </GridItem>
            </Grid>
        </Stack>
    )
}