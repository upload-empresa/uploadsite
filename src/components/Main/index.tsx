import { HStack, Stack } from "@chakra-ui/react"

import { Sidebar } from "../Sidebar"
import { TableBlog } from "../Table"
import { Forms } from "../Forms"
import { ButtonSave } from "../Button"


export function MainBlog() {
    return (
        <HStack
            align={"stretch"}
            w="100%"
        >
            <Sidebar w={"15%"} />
            <TableBlog w={"85%"} title={"Joaquim"} name={"Iba"} phone={"Iba"} email={"iba"} href={""} />
        </HStack>
    )
}

export function MainPostBlog() {
    return (
        <HStack
            align={"stretch"}
        >
            <Sidebar w={"15%"} />
            <Stack
                w={"85%"}
                py={8}
                px={6}
                spacing={5}
            >
                <HStack spacing={6} flexDir={"row"}>
                    <Forms label={"Título"} type={"text"} placeholder={"Digite o título do post"} mb={"0"} />
                    <Forms label={"Data do post"} type={"date"} placeholder={"Digite a data do post"} />
                </HStack>
                <HStack spacing={6} flexDir={"row"}>
                    <Forms label={"Url do post"} type={"text"} placeholder={"Digite a url do post. Ex: vantagens-de-ter-um-site"} mb={"0"} />
                    <Forms label={"Imagem principal do post"} type={"text"} placeholder={"Arraste a imagem"} />
                </HStack>
                <HStack spacing={6} flexDir={"row"}>
                    <Forms label={"Resumo do post"} type={"textarea"} placeholder={"Digite o resumo do post"} mb={"0"} />
                    <Forms label={"Corpo de texto do post"} type={"textarea"} placeholder={"Digite o corpo de texto do post"} />
                </HStack>
                <ButtonSave align="end" />

            </Stack>
        </HStack>
    )
}