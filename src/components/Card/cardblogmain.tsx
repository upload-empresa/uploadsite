import { Heading, HStack, Stack, Text, Link } from "@chakra-ui/react"

import { Imagens } from "../SEO/images"

import NextLink from 'next/link'

interface CardBlogMainProps {
    title: string
    href: any
    text: string
    data: string
    tempo: string
    tam: string
    path: string
    tamW: string
    tamH: string
    description: string

}

interface CardBlogMainVProps {
    title: string
    href: any
    text: string
    data: string
    tempo: string
    tam: string
    path: string
    tamW: string
    tamH: string
    description: string

}

export function CardBlogMain({ href, title, text, tempo, data, tam, path, tamW, tamH, description }: CardBlogMainProps) {
    return (
        <NextLink href={href} passHref>
            <Link
                as="a"
                _hover={{
                    textDecor: "none"
                }}
            >
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
                            color={"black"}
                            lineHeight={"30px"}
                        >
                            {title}
                        </Heading>
                        <Text
                            as="p"
                        >
                            {text}
                        </Text>
                        <HStack
                            justify={"space-between"}
                        >
                            <HStack
                                w={"50%"}
                            >
                                <Imagens tam={"10%"} path={"/images/Group 1.png"} description={"Gabriel Botelho"} tamw={"40"} tamh={"40"} />
                                <Text
                                    as="p"
                                    fontSize={"14px"}
                                    fontWeight={500}
                                    lineHeight={"22px"}
                                    color={"#171923"}
                                >
                                    Gabriel Botelho
                                </Text>
                            </HStack>
                            <Text
                                as="p"
                                fontSize={"14px"}
                                fontWeight={500}
                                lineHeight={"22px"}
                                color={"#4a5568"}
                            >
                                {data} Fev | Leitura: {tempo}min
                            </Text>
                        </HStack>
                    </Stack>
                    <Stack
                        w="90%"
                    >
                        <Imagens tam={tam} path={path} description={description} tamw={tamW} tamh={tamH} />
                    </Stack>
                </HStack>
            </Link>
        </NextLink>
    )
}

export function CardBlogMainV({ href, title, text, data, tempo, tam, path, tamW, tamH, description }: CardBlogMainVProps) {
    return (
        <NextLink href={href} passHref>
            <Link
                as="a"
                _hover={{
                    textDecor: "none"
                }}
            >
                <Stack
                    spacing={6}
                >
                    <Stack
                        spacing={4}
                    >
                        <Heading
                            as="h2"
                            fontSize={"22px"}
                            fontWeight={800}
                            color={"black"}
                            lineHeight={"30px"}
                        >
                            {title}
                        </Heading>
                        <Text
                            as="p"
                        >
                            {text}
                        </Text>
                        <HStack
                            justify={"space-between"}
                        >
                            <HStack
                                w={"50%"}
                            >
                                <Imagens tam={{msm:"13%", sm:"20%", min:"100%"}} path={"/images/Group 1.png"} description={"Gabriel Botelho"} tamw={"40"} tamh={"40"} />
                                <Text
                                    as="p"
                                    fontSize={{msm:"14px", sm:"14px", min:"12px"}}
                                    fontWeight={500}
                                    lineHeight={"22px"}
                                    color={"#171923"}
                                >
                                    Gabriel Botelho
                                </Text>
                            </HStack>
                            <Text
                                as="p"
                                fontSize={{msm:"14px", sm:"14px", min:"12px"}}
                                fontWeight={500}
                                lineHeight={"22px"}
                                color={"#4a5568"}
                            >
                                {data} Fev | Leitura: {tempo}min
                            </Text>
                        </HStack>
                    </Stack>
                    <Stack
                        w="90%"
                    >
                        <Imagens tam={tam} path={path} description={description} tamw={tamW} tamh={tamH} />
                    </Stack>
                </Stack>
            </Link>
        </NextLink>
    )
}