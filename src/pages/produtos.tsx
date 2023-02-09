import { Heading, HStack, Stack, Text, Link } from "@chakra-ui/react"
import NextLink from 'next/link'
import dynamic from "next/dynamic"

import { TextProduto } from "../components/SEO/textproduto"
import { HeaderProduto } from "../components/SEO/headerproduto"
import { ButtonProduto } from "../components/SEO/buttonproduto"
import { DescriptionProduto } from "../components/SEO/descriptionproduto"
import { SectionDescription } from "../components/SEO/descriptiobutton"
import { SectionTitles } from "../components/SEO/titletext"
import { CardLeft } from "../components/Card/cardleft"
import { Imagens } from "../components/SEO/images"

export default function Produtos() {

    const HeaderDynamic = dynamic(() => import("../components/SEO/head").then(module => module.Header))


    return (
        <>
            <HeaderDynamic title={"Produtos da Upload"} description={"Aqui você encontra todos os produtos necessários para levar sua empresa para outro nível. Entre e conheça nossos produtos e como eles irão ajudar sua empresa."} />
            <Stack
                flexDir="row"
            >
                <Stack
                    justify={{iba: "center"}}
                >
                    <HStack
                        w="100%"
                        p={6}
                        align="center"
                        flexDir={{ base: "column", msm: "column", md: "column", lg: "row", xl: "row" }}

                    >
                        <Stack
                            spacing={5}

                            align={{ base: "start" }}

                        >
                            <Heading
                                as='h1'
                                fontSize={{ sm: "40px", base: "48px" }}
                                fontWeight="600"
                                w="100%"

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
                                textAlign={{ base: "left" }}
                                w={{ base: "100%" }}

                            >
                                Conheça nossos produtos e descubra como você pode se destacar no mercado.
                            </Text>
                            <Stack
                                w={{ base: "100%", msm: "75%", md: "40%", lg: "50%", xl: "50%" }}
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
                        <Imagens tam={{iba: "30%", xl: "27%", lg:"60%", md: "45%", msm:"90%", sm:"90%"}} path={"/images/produto.jpeg"} description={"Produto Upload"} tamw={"618"} tamh={"620"} />
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
                <CardLeft urlimage={"/images/siteexemplo.png"} altura={"378"} largura={"648"} description={"Notebook com site"} tam={{iba: "22%", xl: "27%", lg:"40%", md: "45%", msm:"85%", sm:"85%"}}>

                    <SectionTitles text1={"01"} text2={"Sites"} />
                    <SectionDescription text1={"Precisando aumentar a visibilidade do seu negócio? O site é o produto certo para você!"} text2={"Peça Agora"} />

                </CardLeft>
                <HStack
                    flexDir={{ base: "column", msm: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}
                    spacing={{ lg: 28, xl: 28 }}
                >
                    <Imagens tam={{iba: "22%", xl: "18%", lg:"30%", md: "35%", msm:"60%", sm:"70%"}} path={"/images/sistema.png"} description={"Notebook com site"} tamw={"467"} tamh={"535"} />
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
                <CardLeft urlimage={"/images/loja.png"} altura={"446"} largura={"559"} description={"Notebook com site"} tam={{iba: "20%", xl: "30%", lg:"47%", md: "40%", msm:"65%", sm:"85%"}}>
                    <SectionTitles text1={"03"} text2={"Sistemas"} />
                    <SectionDescription text1={"Organização, praticidade, armazenamento de dados em um só lugar? Venha conversar com a gente e fazer o sistema da sua empresa."} text2={"Peça Agora"} />

                </CardLeft>
            </Stack >
        </>
    )
}