/* eslint-disable */
import { Flex, Link, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import NextLink from 'next/link'

interface CardsProps {
    urlimage: string
    description: string
    title: string
    text: string
    tamw: string
    tamh: string
    tam?: any
}

export function Cards({ urlimage, description, title, tamw, text, tamh, tam }: CardsProps) {
    return (
        <Flex
            bg="white"
            borderRadius="8px"
            p={6}
            w={{ base: "100%", msm: "100%", md: "100%", lg: "25%", xl: "25%" }}
            justify="center"
            transition="ease-in 100ms"
            _hover={{
                transform: 'scale(1.10)'
            }}

        >
            <NextLink href="/produtos" passHref>
                <Link
                    _hover={{
                        textDecoration: "none",
                    }}
                >
                    <Stack
                        spacing={{ base: 2 }}

                    >
                        <Flex
                            w={tam}
                            justify="center"
                            align={"center"}
                        >
                            <Image src={urlimage} width={tamw} height={tamh} alt={description} />
                        </Flex>
                        <Text
                            color="#82753c"
                            fontSize="20px"
                            fontWeight="700"
                            textAlign="center"
                        >
                            {title}
                        </Text>
                        <Text
                            color="#82753c"
                            fontSize="16px"
                            textAlign="left"
                            lineHeight="135%"
                        >
                            {text}
                        </Text>
                    </Stack>
                </Link>
            </NextLink>
        </Flex>
    )



}