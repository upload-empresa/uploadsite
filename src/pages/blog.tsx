import { Stack } from "@chakra-ui/react"

import { CardBlogMain, CardBlogMainV } from "../components/Card/cardblogmain"
import { BlogMobile, BlogMobileV } from "../components/SEO/blogmobile"
import { Newsletter, NewsletterV } from "../components/SEO/newsletter"


export default function Blog() {

    return (
        <Stack
            as="main"
        >
            <BlogMobile />
            <BlogMobileV />
            <Stack
                px={{ base: 6, md: 8, lg: 12 }}
                pb={{ base: 10, md: 15, lg: 20 }}
                display={{ md: "flex", xl: "flex", lg: "flex", msm:"none", sm:"none", min:"none" }}
                pt={10}
            >
                <Stack
                    bg="white"
                    borderRadius="8px"
                    boxShadow={"5px 6px 8px 1px #00000054"}
                    p={{base:8, md:6}}
                    color='blackAlpha.700'
                    fontWeight='bold'
                >
                    <CardBlogMain href={"/captar-novos-clientes"} />
                </Stack>
            </Stack>
            <Stack
                px={{ base: 6, md: 8, lg: 12 }}
                pb={{ base: 10, md: 15, lg: 20 }}
                display={{ msm: "flex", sm: "flex", min: "flex", md:"none", lg:"none", xl:"none" }}
                pt={10}
            >
                <Stack
                    bg="white"
                    borderRadius="8px"
                    boxShadow={"5px 6px 8px 1px #00000054"}
                    p={{base:8, md:6}}
                    color='blackAlpha.700'
                    fontWeight='bold'
                >
                    <CardBlogMainV href={"/captar-novos-clientes"} />
                </Stack>
            </Stack>
            <Newsletter />
            <NewsletterV />
        </Stack>
    )
}
