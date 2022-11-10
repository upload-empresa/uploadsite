import { HStack, Stack, Text } from "@chakra-ui/react"
import { FigureImage } from "../Figure"
import { FooterItens } from "./footerItens"
import { FooterList } from "./footerList"
import { FooterTitle } from "./footerTitle"

export function Footer() {
    return (
        <Stack
            as="footer"
        >
            {/* <HStack
                as="section"
                bg="black"
                px={9}
                pt={{base:"12", sm:"12", msm:"12", md:"12", lg:"6", xl:"6"}}
                pb={20}
                w="100%"
                align="start"
                justify="center"
                flexDir={{base:"column", sm:"column", msm:"column", md:"row", lg:"row", xl:"row"}}
            >
                <FooterList>
                    <FooterTitle footertitle="Produtos" />
                    <FooterItens caminho="#" footeritem="Site" />
                    <FooterItens caminho="#" footeritem="Sistema" />
                    <FooterItens caminho="#" footeritem="Loja Virtual" />
                </FooterList>

                <FooterList>
                    <FooterTitle footertitle="Redes Sociais" />
                    <FooterItens caminho="#" footeritem="Instagram" />
                </FooterList>

            </HStack> */}
            <HStack
                as="section"
                spacing={8}
                bg="white"
                p={6}
                flexDir={{base:"column", sm:"column", msm:"column", md:"row", lg:"row", xl:"row"}}
            >
                <FigureImage />
                <Text
                    as="p"
                >
                    Copyright © 2022 Upload Todos os direitos reservados.
                </Text>

            </HStack>
        </Stack>
    )
}