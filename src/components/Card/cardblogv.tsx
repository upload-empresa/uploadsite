import { Stack, Heading, HStack, Text } from "@chakra-ui/react"

import { Imagens } from "../SEO/images"

interface CardBlogVProps {
    title?: string,
    author?: string
    body?: string
}

export function CardBlogV({ title, author, body }: CardBlogVProps) {
    return (
        <Stack
            align={"center"}
            p={6}
            spacing={4}
        >
            <Stack>
                <Imagens tam={"100%"} path={"/images/iba.jpg"} description={"Imagem genérica"} tamw={"356"} tamh={"200"} />
            </Stack>
            <Stack
                spacing={8}
            >
                <Heading
                    as="h2"
                    fontSize={"22px"}
                    fontWeight={500}
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
                        12 Jan | Leitura: 10min
                    </Text>
                </HStack>
            </Stack>


        </Stack>
    )
}