import { Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { Imagens } from "../SEO/images"
import NextLink from 'next/link'

interface CardBlogProps {
    title: string,
    author: string,
    data: string,
    href: string
}

export function CardBlog({ title, author, data, href }: CardBlogProps) {
    return (
        <NextLink href={href} passHref>
            <HStack
                align={"start"}
                spacing={4}
            >
                <Imagens tam={"30%"} path={"/images/iba.jpg"} description={"Imagem genérica"} tamw={"356"} tamh={"200"} />
                <Stack
                    spacing={8}
                >
                    <Heading
                        as="h2"
                        fontSize={"22px"}
                        fontWeight={800}
                        lineHeight={"30px"}
                    >
                        {title}
                    </Heading>
                    <HStack
                        justify={"space-between"}
                    >
                        <HStack>
                            <Imagens tam={"10%"} path={"/images/iba.jpg"} description={"Imagem genérica"} tamw={"356"} tamh={"200"} borderRadius={"999px"} />
                            <Text
                                as="p"
                                fontSize={"14px"}
                                fontWeight={500}
                                lineHeight={"22px"}
                                color={"#171923"}
                            >
                                {author}
                            </Text>
                        </HStack>
                        <Text
                            as="p"
                            fontSize={"14px"}
                            fontWeight={500}
                            lineHeight={"22px"}
                            color={"#4a5568"}
                        >
                            13 Jan | Leitura: 10min
                        </Text>
                    </HStack>
                </Stack>
            </HStack>
        </NextLink>
    )
}