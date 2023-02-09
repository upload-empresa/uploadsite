import { Heading, HStack, Stack, Text } from "@chakra-ui/react"

import { Buttons } from "../SEO/buttons"
import { Imagens } from "../SEO/images"

import NextLink from 'next/link'

interface CardBlogMainProps {
    title?: string,
    author?: string,
    body?: string,
    data?: string,
    href?: any
}

export function CardBlogMain({ title, author, body, data, href }: CardBlogMainProps) {
    return (
        <NextLink href={href} passHref>
            <HStack
                spacing={10}
            >
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
                    <Text

                    >
                        {body}

                    </Text>
                    <HStack
                        justify={"space-between"}
                    >
                        <HStack

                            w={"50%"}
                        >
                            <Imagens tam={"10%"} path={"/images/iba.jpg"} description={"Imagem genérica"} tamw={"356"} tamh={"200"} borderRadius={"full"} />
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
                    <Buttons text={""} tam={undefined} bgcolor={""} bgcolorhover={""} rota={""} />
                </Stack>
                <Stack
                    w="90%"
                >
                    <Imagens tam={"100%"} path={"/images/iba.jpg"} description={"Imagem genérica"} tamw={"356"} tamh={"200"} />
                </Stack>
            </HStack>
        </NextLink>
    )
}