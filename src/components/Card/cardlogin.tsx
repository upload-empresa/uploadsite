import { Stack, Heading, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

import { FormLogin } from "../Form"
import { TextLogin } from "../Texts/textlogin"

interface CardLoginProps {
    title: string
    text: string
    children?: ReactNode
    control: any
    erroremail: any
    errorsenha: any
    helper: any
    enviar: string
    w: any
}

export function CardLogin({ title, text, children, control, erroremail, errorsenha, helper, enviar, w }: CardLoginProps) {


    return (
        <Stack
            w={w}
            spacing={12}

        >
            <Stack
                align={"center"}
                spacing={8}
                py={8}

            >
                <Heading
                    as="h1"
                    fontSize={{ md: "28px", msm: "24px", nvl: "24px", min: "20px" }}
                    fontWeight={700}
                    color="#525252"
                >
                    {title}
                </Heading>

                <Text
                    as="p"
                    color={"#A1A1A1"}
                    fontSize="12px"
                    fontWeight={600}
                >
                    {text}
                </Text>
                <FormLogin enviar={enviar} control={control} erroremail={erroremail} errorsenha={errorsenha} helper={helper} wForm={w}>
                    {children}
                </FormLogin>

            </Stack>
            <TextLogin text={"Já tem conta?"} span={"Entre na sua conta"} />
        </Stack>

    )
}