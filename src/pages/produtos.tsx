import { Heading, HStack, Stack, Text, Button, Link } from "@chakra-ui/react"
import Image from 'next/image'
import NextLink from 'next/link'
import dynamic from "next/dynamic"

export default function Produtos() {

    const NavbarDynamic = dynamic(() => import("../components/Navbar").then(module => module.Navbar))

    const FooterDynamic = dynamic(() => import("../components/Footer").then(module => module.Footer))

    const HeaderDynamic = dynamic(() => import("../components/SEO/head").then(module => module.Header))

  
    return (
        <>
        <HeaderDynamic title={"Produtos da Upload"} description={"Aqui você encontra todos os produtos necessários para levar sua empresa para outro nível. Entre e conheça nossos produtos e como eles irão ajudar sua empresa."} />
            <NavbarDynamic />
            <Stack
                flexDir="row"
            >
                <Stack
                >
                    <HStack
                        w="100%"
                        p={6}
                        align="center"
                        flexDir={{base:"column", msm:"column", md:"column", lg:"row", xl:"row"}}

                    >
                        <Stack
                            spacing={5}

                            align={{base:"center", msm:"center", md:"center", lg:"start", xl:"start"}}

                        >
                            <Heading
                                as='h1'
                                fontSize={{sm:"40px", base:"48px"}}
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
                                textAlign={{base:"center", msm:"center", md:"center", lg:"left", xl:"left"}}
                                w={{base:"80%",msm:"60%", md:"50%", lg:"100%", xl:"100%"}}

                            >
                                Conheça nossos produtos e descubra como você pode se destacar no mercado.
                            </Text>
                            <Stack
                                w={{base:"75%", msm:"75%", md:"40%", lg:"50%", xl:"50%"}}
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
                <HStack
                    flexDir={{ base: "column", lg: "row" }}
                    spacing={{ base: "0", lg: "8" }}
                >
                    <Image src="/images/siteexemplo.png" height={"150%"} width="230%" alt="Notebook com site" />
                    <Stack
                        flexDir={{ base: "column", lg: "column", xl: "column" }}
                    >
                        <HStack
                            spacing={{ base: "4", lg: "4" }}
                            justify={{ base: "center", lg: "start", xl: "start" }}
                        >
                            <Text
                                fontSize={{base:"52px", msm:"64px", md:"64px", lg:"72px", xl:"72px"}}
                                color="white"
                                opacity="0.4"
                                fontWeight="500"
                                as="p"
                            >
                                01
                            </Text>
                            <Heading
                                fontSize={{base:"24px", msm:"32px", md:"32px", lg:"40px", xl:"40px"}}
                                color="white"
                                fontWeight="500"
                                as="h2"
                            >
                                Sites
                            </Heading>
                        </HStack>
                        <Stack
                            flexDir={{ base: "column" }}
                            spacing={6}
                            align={{ base: "center", lg: "start", xl: "start" }}

                        >
                            <Text
                                fontSize="20px"
                                color="white"
                                as="p"
                                maxW={{ base: "100%", lg: "55%" }}
                            >
                                Precisando aumentar a visibilidade do seu negócio?
                                O site é o produto certo para você!
                            </Text>
                            <NextLink href={"https://wa.me/5532984223528"} passHref target="_blank">
                                <Button
                                    colorScheme="blackAlpha"
                                    fontSize="20px"
                                    color="white"
                                    w={{ base: "65%", lg: "23%" }}
                                    py={6}
                                    borderRadius="full"
                                >
                                    Peça Agora
                                </Button>
                            </NextLink>
                        </Stack>
                    </Stack>
                </HStack>
                <HStack
                    flexDir={{base:"column", msm:"column", md:"column", lg:"row-reverse", xl:"row-reverse"}}
                    spacing={8}
                >
                    <Image src="/images/sistema.png" width="220%" height={"220%"} alt="Notebook com site" />
                    <Stack
                        flexDir={{ base: "column" }}
                        align={{base:'center', lg:"flex-end", xl:"flex-end"}}
                    >
                        <HStack
                            flexDir="row-reverse"
                            w="42%"
                        >
                            <Text
                                fontSize={{base:"52px", msm:"64px", md:"64px", lg:"72px", xl:"72px"}}
                                color="white"
                                opacity="0.4"
                                fontWeight="500"
                                as="p"
                                mr="5%"
                            >
                                02
                            </Text>
                            <Heading
                                fontSize={{base:"24px", msm:"32px", md:"32px", lg:"40px", xl:"40px"}}
                                color="white"
                                fontWeight="500"
                                as="h2"
                            >
                                Lojas Virtuais
                            </Heading>
                        </HStack>
                        <Stack
                            flexDir="column"
                            spacing={6}
                            align={{base:"center", lg:"end", xl:"end"}}

                        >
                            <Text
                                fontSize="20px"
                                color="white"
                                as="p"
                                maxW={{base:"100%", lg:"55%", xl:"55%"}}
                            >
                                Se você tem um ou mais produtos e precisa ampliar suas vendas, peça agora uma loja virtual.                             </Text>
                            <NextLink href={"https://wa.me/5532984223528"} passHref target="_blank">
                                <Button
                                    colorScheme="blackAlpha"
                                    fontSize="20px"
                                    color="white"
                                    w={{ base: "65%", lg: "23%" }}
                                    py={6}
                                    borderRadius="full"
                                >
                                    Peça Agora
                                </Button>
                            </NextLink>
                        </Stack>
                    </Stack>
                </HStack>
                <HStack
                    flexDir={{ base: "column", lg: "row" }}
                    spacing={{ base: "0", lg: "8" }}
                >
                    <Image src="/images/loja.png" width="250%" height={"200%"} alt="Notebook com site" />
                    <Stack
                        flexDir={{ base: "column", lg: "column", xl: "column" }}
                    >
                        <HStack
                            spacing={{ base: "4", lg: "4" }}
                            justify={{ base: "center", lg: "start", xl: "start"}}
                            
                        >
                            <Text
                                fontSize={{base:"52px", msm:"64px", md:"64px", lg:"72px", xl:"72px"}}
                                color="white"
                                opacity="0.4"
                                fontWeight="500"
                                as="p"
                            >
                                03
                            </Text>
                            <Heading
                                fontSize={{base:"24px", msm:"32px", md:"32px", lg:"40px", xl:"40px"}}
                                color="white"
                                fontWeight="500"
                                as="h2"
                            >
                                Sistemas
                            </Heading>
                        </HStack>
                        <Stack
                            flexDir="column"
                            spacing={6}
                            align={{ base: "center", lg: "start", xl: "start" }}
                        >
                            <Text
                                fontSize="20px"
                                color="white"
                                as="p"
                                maxW={{ base: "100%", lg: "55%" }}
                            >
                                Organização, praticidade, armazenamento de dados em um só lugar? Venha conversar com a gente e fazer o sistema da sua empresa.
                            </Text>
                            <NextLink href={"https://wa.me/5532984223528"} passHref target="_blank">
                                <Button
                                    colorScheme="blackAlpha"
                                    fontSize="20px"
                                    color="white"
                                    w={{ base: "65%", lg: "23%" }}
                                    py={6}
                                    borderRadius="full"
                                >
                                    Peça Agora
                                </Button>
                            </NextLink>
                        </Stack>
                    </Stack>
                </HStack>


            </Stack >
            <FooterDynamic />
        </>
    )
}