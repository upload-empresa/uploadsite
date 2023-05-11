import { Stack } from "@chakra-ui/react"
import dynamic from "next/dynamic"

import { CardBlogMain, CardBlogMainV } from "../../components/Card/cardblogmain"
import { BlogMobile, BlogMobileV } from "../../components/SEO/blogmobile"
import { Newsletter, NewsletterV } from "../../components/SEO/newsletter"


export default function Blog() {
    const HeaderDynamic = dynamic(() => import("../../components/SEO/head").then(module => module.Header))

    return (
        <>
            <HeaderDynamic title={"Upload | Blog"} description={"Seja bem-vindo ao blog da Upload. Aprenda sobre como alavancar, organizar e desenvolver seu negócio usando as melhores ferramentas e estratégias do mercado."} />

            <Stack
                as="main"
            >
                <BlogMobile />
                <BlogMobileV />
                <Stack
                    px={{ base: 6, md: 8, lg: 12 }}
                    pb={{ base: 10, md: 15, lg: 20 }}
                    display={{ md: "flex", xl: "flex", lg: "flex", msm: "none", sm: "none", min: "none" }}
                    pt={10}
                >
                    <Stack
                        bg="white"
                        borderRadius="8px"
                        boxShadow={"5px 6px 8px 1px #00000054"}
                        p={{ base: 8, md: 6 }}
                        color='blackAlpha.700'
                        fontWeight='bold'
                        spacing={7}
                    >
                        <CardBlogMain href={"/blog/captar-novos-clientes"} title={"Captar novos clientes: Como tornar seu negócio mais rentável"} text={"A captação de novos clientes tem se tornado cada vez mais desafiadora para os novos empreendedores e também para aqueles que atualmente estão se atualizando."} data={"09"} tempo={"05"} tam={"100%"} path={"/images/postblog.jpeg"} tamW={"1600"} tamH={"936"} description={"Gabriel Botelho"} />
                        <CardBlogMain href={"/blog/modelo-de-negocios"} title={"Modelo de negócios: como criar um modelo de negócios"} text={"Muitas pessoas acreditam que para você se destacar no mercado precisa necessariamente ter uma ideia completamente original e inovadora. Porém, isso não é verdade e eu posso provar."} data={"16"} tempo={"05"} tam={"100%"} path={"/images/pexels.jpg"} tamW={"1600"} tamH={"936"} description={"Gabriel Botelho"} />
                        <CardBlogMain href={"/blog/vantagens-de-ter-um-site"} title={"As vantagens de ter um site para o seu negócio!"} text={"Muito além de levar o seu público até o seu negócio, a presença digital oferece maior segurança para quem busca pelos seus produtos ou serviços."} data={"03"} tempo={"05"} tam={"100%"} path={"/images/CAPA.jpg"} tamW={"1280"} tamH={"851"} description={"João Pedro Rezende"} />
                        <CardBlogMain href={"/blog/custos-ocultos-quando-nao-se-contrata-uma-empresa-especializada-para-criar-o-seu-site"} title={"Descubra os custos ocultos quando não se contrata uma empresa especializada para criar o seu site!"} text={"Você sabia que criar o seu site por conta própria ou por empresas de outros ramos pode acarretar custos ocultos na gestão do seu negócio?"} data={"11"} tempo={"05"} tam={"100%"} path={"/images/capa-custos.jpg"} tamW={"1280"} tamH={"854"} description={"João Pedro Rezende"} />


                    </Stack>
                </Stack>
                <Stack
                    px={{ base: 6, md: 8, lg: 12 }}
                    pb={{ base: 10, md: 15, lg: 20 }}
                    display={{ msm: "flex", sm: "flex", min: "flex", md: "none", lg: "none", xl: "none" }}
                    pt={10}
                >
                    <Stack
                        bg="white"
                        borderRadius="8px"
                        boxShadow={"5px 6px 8px 1px #00000054"}
                        p={{ base: 8, md: 6 }}
                        color='blackAlpha.700'
                        fontWeight='bold'
                        spacing={14}
                    >
                        <CardBlogMainV href={"/blog/captar-novos-clientes"} title={"Captar novos clientes: Como tornar seu negócio mais rentável"} text={"A captação de novos clientes tem se tornado cada vez mais desafiadora para os novos empreendedores e também para aqueles que atualmente estão se atualizando."} data={"09"} tempo={"05"} tam={"100%"} path={"/images/postblog.jpeg"} tamW={"1600"} tamH={"936"} description={"Gabriel Botelho"} />
                        <CardBlogMainV href={"/blog/modelo-de-negocios"} title={"Modelo de negócios: como criar um modelo de negócios"} text={"Muitas pessoas acreditam que para você se destacar no mercado precisa necessariamente ter uma ideia completamente original e inovadora. Porém, isso não é verdade e eu posso provar."} data={"16"} tempo={"05"} tam={"100%"} path={"/images/pexels.jpg"} tamW={"1600"} tamH={"936"} description={"Gabriel Botelho"} />
                        <CardBlogMainV href={"/blog/vantagens-de-ter-um-site"} title={"As vantagens de ter um site para o seu negócio!"} text={"Muito além de levar o seu público até o seu negócio, a presença digital oferece maior segurança para quem busca pelos seus produtos ou serviços."} data={"03"} tempo={"05"} tam={"100%"} path={"/images/CAPA.jpg"} tamW={"1280"} tamH={"851"} description={"João Pedro Rezende"} />
                        <CardBlogMainV href={"/blog/custos-ocultos-quando-nao-se-contrata-uma-empresa-especializada-para-criar-o-seu-site"} title={"Descubra os custos ocultos quando não se contrata uma empresa especializada para criar o seu site!"} text={"Você sabia que criar o seu site por conta própria ou por empresas de outros ramos pode acarretar custos ocultos na gestão do seu negócio?"} data={"11"} tempo={"05"} tam={"100%"} path={"/images/capa-custos.jpg"} tamW={"1280"} tamH={"854"} description={"João Pedro Rezende"} />
                    </Stack>
                </Stack>
                <Newsletter />
                <NewsletterV />
            </Stack>
        </>
    )
}
