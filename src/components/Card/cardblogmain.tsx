import { Heading, HStack, Stack, Text, Link } from "@chakra-ui/react"

import { Buttons } from "../SEO/buttons"
import { Imagens } from "../SEO/images"

import NextLink from 'next/link'

interface CardBlogMainProps {

    href: any
}

export function CardBlogMain({ href }: CardBlogMainProps) {
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
                            Captar novos clientes: Como tornar seu negócio mais rentável
                        </Heading>
                        <Text
                            as="p"
                        >
                            A captação de novos clientes tem se tornado cada vez mais desafiadora para os novos empreendedores e também para aqueles que atualmente estão se atualizando.
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
                                09 Fev | Leitura: 6min
                            </Text>
                        </HStack>
                    </Stack>
                    <Stack
                        w="90%"
                    >
                        <Imagens tam={"100%"} path={"/images/postblog.jpeg"} description={"Gabriel Botelho"} tamw={"1600"} tamh={"936"} />
                    </Stack>
                </HStack>
            </Link>
        </NextLink>
    )
}

export function CardBlogMainV({ href }: CardBlogMainProps) {
    return (
        <NextLink href={href} passHref>
            <Link
                as="a"
                _hover={{
                    textDecor: "none"
                }}
            >
                <Stack
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
                            Captar novos clientes: Como tornar seu negócio mais rentável
                        </Heading>
                        <Text
                            as="p"
                        >
                            A captação de novos clientes tem se tornado cada vez mais desafiadora para os novos empreendedores e também para aqueles que atualmente estão se atualizando.
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
                                09 Fev | Leitura: 6min
                            </Text>
                        </HStack>
                    </Stack>
                    <Stack
                        w="90%"
                    >
                        <Imagens tam={"100%"} path={"/images/postblog.jpeg"} description={"Gabriel Botelho"} tamw={"1600"} tamh={"936"} />
                    </Stack>
                </Stack>
            </Link>
        </NextLink>
    )
}