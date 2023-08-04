/* eslint-disable */
import { Flex, Link, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import NextLink from 'next/link'
import { FormsLogin } from "../Foms"

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
                        align="center"

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

interface CardLoginProps {
    submitHandler: any
    handleSubmit: any
    control: any
    errors: any
}

export function CardLogin({ submitHandler, control, handleSubmit, errors }:CardLoginProps) {
    return (
        <Stack
            boxShadow='15px 15px 20px rgba(0, 0, 0, 0.1)'
            my={"10%"}
            w={{md:"400px", nvl:"300px", min:"250px"}}
        >
            <Stack
                bg="#2FACFA"
                width='100%'
                height={{md:'80px', nvl:"60px", min:"40px"}}
                borderRadius="8px 8px 0px 0px"
            />
            <FormsLogin submitHandler={submitHandler} control={control} handleSubmit={handleSubmit} errors={errors} />
        </Stack>
    )
}