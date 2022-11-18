import { Heading, HStack, Stack, Text, Link } from "@chakra-ui/react"
import Image from 'next/image'
import NextLink from 'next/link'
import dynamic from "next/dynamic"
import { TextProduto } from "../components/SEO/textproduto"
import { HeaderProduto } from "../components/SEO/headerproduto"
import { ButtonProduto } from "../components/SEO/buttonproduto"
import { DescriptionProduto } from "../components/SEO/descriptionproduto"
import { SectionDescription } from "../components/SEO/descriptiobutton"
import { SectionTitles } from "../components/SEO/titletext"
import { CardLeft } from "../components/Card/cardleft"

export default function Produtos() {

    const HeaderDynamic = dynamic(() => import("../components/SEO/head").then(module => module.Header))


    return (
        <>
            <HeaderDynamic title={"Produtos da Upload"} description={"Aqui você encontra todos os produtos necessários para levar sua empresa para outro nível. Entre e conheça nossos produtos e como eles irão ajudar sua empresa."} />
            <Stack
                flexDir="row"
            >
                <Stack
                >
                    <HStack
                        w="100%"
                        p={6}
                        align="center"
                        flexDir={{ base: "column", msm: "column", md: "column", lg: "row", xl: "row" }}

                    >
                        <Stack
                            spacing={5}

                            align={{ base: "center", msm: "center", md: "center", lg: "start", xl: "start" }}

                        >
                            <Heading
                                as='h1'
                                fontSize={{ sm: "40px", base: "48px" }}
                                fontWeight="600"

                            >
                                Modernize seu
                                <Text
                                    as="p"
                                    color="#2FACFA"
                                >
                                    negócio
                                </Text>
                            </Heading>
                            <Text
                                as="p"
                                fontSize="24px"
                                textAlign={{ base: "center", msm: "center", md: "center", lg: "left", xl: "left" }}
                                w={{ base: "80%", msm: "60%", md: "50%", lg: "100%", xl: "100%" }}

                            >
                                Conheça nossos produtos e descubra como você pode se destacar no mercado.
                            </Text>
                            <Stack
                                w={{ base: "75%", msm: "75%", md: "40%", lg: "50%", xl: "50%" }}
                                spacing={6}

                            >
                                <NextLink href={"https://wa.me/5532984223528"} passHref target="_blank">
                                    <Link
                                        as="a"
                                        bg="#2FACFA"
                                        target="_blank"
                                        color="white"
                                        borderRadius="32px"
                                        px={6}
                                        py={4}
                                        fontSize="24px"
                                        textAlign="center"
                                        mb="5%"
                                        _hover={{
                                            textDecor: 'none'
                                        }}
                                    >
                                        Entre em Contato
                                    </Link>
                                </NextLink>
                            </Stack>
                        </Stack>
                        <Image src="/images/produto.jpeg" alt="Produto Upload" width="618px" height="620px" />
                    </HStack>
                </Stack>
            </Stack>
            <Stack
                bg="#69bef4"
                spacing={12}
                py={6}
                px={4}
                flexDir={{ base: "column", lg: "column", xl: "column" }}
            >
                <CardLeft urlimage={"/images/siteexemplo.png"} altura={"378"} largura={"648"} description={"Notebook com site"}>

                    <SectionTitles text1={"01"} text2={"Sites"} />
                    <SectionDescription text1={"Precisando aumentar a visibilidade do seu negócio? O site é o produto certo para você!"} text2={"Peça Agora"} />

                </CardLeft>
                <HStack
                    flexDir={{ base: "column", msm: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}
                    spacing={28}
                >
                    <Image src="/images/sistema.png" width="220%" height={"220%"} alt="Notebook com site" />
                    <Stack
                        flexDir={{ base: "column" }}
                        align={{ base: 'center', lg: "flex-end", xl: "flex-end" }}
                    >
                        <HStack
                            flexDir="row-reverse"
                            w="42%"
                            spacing={{ base: "4", lg: "4" }}
                        >
                            <TextProduto text={"02"} />
                            <HeaderProduto text={"Lojas Virtuais"} />
                        </HStack>
                        <Stack
                            flexDir="column"
                            spacing={6}
                            align={{ base: "center", lg: "end", xl: "end" }}

                        >
                            <DescriptionProduto text={"Se você tem um ou mais produtos e precisa ampliar suas vendas, peça agora uma loja virtual."} />
                            <ButtonProduto text={"Peça Agora"} />
                        </Stack>
                    </Stack>
                </HStack>
                <CardLeft urlimage={"/images/loja.png"} altura={"446"} largura={"559"} description={"Notebook com site"}>
                    <SectionTitles text1={"03"} text2={"Sistemas"} />
                    <SectionDescription text1={"Organização, praticidade, armazenamento de dados em um só lugar? Venha conversar com a gente e fazer o sistema da sua empresa."} text2={"Peça Agora"} />

                </CardLeft>
            </Stack >
        </>
    )
}