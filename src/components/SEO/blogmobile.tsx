import { HStack, Stack, Heading, Text } from "@chakra-ui/react"

import { Images } from "../Figure/image"
import { TextBlue } from "./textblue"

export function BlogMobile() {
    return (
        <HStack
            px={{ base: 6, md: 8, lg: 12 }}
            pt={{ base: 10, md: 15, lg: 20 }}
            display={{ md: "flex", xl: "flex", lg: "flex", msm:"none", sm:"none", min:"none" }}

        >
            <Stack
                w={"50%"}
                spacing={6}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: "48px", md: "40px" }}
                    lineHeight={"60px"}
                    fontWeight={500}
                >
                    Aqui você encontra aquele <TextBlue>impulso que o seu negócio precisa</TextBlue>
                </Heading>
                <Text
                    as="p"
                    fontSize={{ base: "20px", md: "16px" }}
                    lineHeight={"30px"}
                    color="#82735C"
                >
                    Seja bem-vindo ao blog da Upload. Aprenda sobre como alavancar, organizar e desenvolver seu negócio usando as melhores ferramentas e estratégias do mercado.
                </Text>
            </Stack>
            <Images w={"50%"} tamw={923} tamh={815} altText={"Impulsione seu negócio com a Upload"} path={"/images/blog.jpeg"} />
        </HStack>

    )
}

export function BlogMobileV() {
    return (
        <Stack
            align={"center"}
            px={{ base: 6, md: 8, lg: 12 }}
            pt={{ base: 10, md: 15, lg: 20 }}
            display={{ msm: "flex", sm: "flex", min: "flex", md:"none", lg:"none", xl:"none" }}

        >
            <Stack
                spacing={6}
            >
                <Heading
                    as="h1"
                    fontSize={{ msm:"40px", sm:"40px", min:"32px" }}
                    lineHeight={"60px"}
                    fontWeight={500}
                >
                    Aqui você encontra aquele <TextBlue>impulso que o seu negócio precisa</TextBlue>
                </Heading>
                <Text
                    as="p"
                    fontSize={{ msm:"20px", sm:"20px", min:"16px" }}
                    lineHeight={"30px"}
                    color="#82735C"
                >
                    Seja bem-vindo ao blog da Upload. Aprenda sobre como alavancar, organizar e desenvolver seu negócio usando as melhores ferramentas e estratégias do mercado.
                </Text>
            </Stack>
            <Images w={{msm:"85%", sm:"95%", min:"100%"}} tamw={923} tamh={815} altText={"Impulsione seu negócio com a Upload"} path={"/images/blog.jpeg"} />
        </Stack>

    )
}