import { Flex, Stack, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"


export default function Home() {

  const HookFormDynamic = dynamic(() => import("../components/contactForm/Form").then(module => module.default))

  const NavbarDynamic = dynamic(() => import("../components/Navbar").then(module => module.Navbar))

  const FooterDynamic = dynamic(() => import("../components/Footer").then(module => module.Footer))

  const ButtonsDynamic = dynamic(() => import("../components/SEO/buttons").then(module => module.Buttons))

  const HeaderDynamic = dynamic(() => import("../components/SEO/head").then(module => module.Header))

  const HomeB1HDynamic = dynamic(() => import("../components/Dynamic/home").then(module => module.HomeB1H))

  const HomeB1VDynamic = dynamic(() => import("../components/Dynamic/home").then(module => module.HomeB1V))

  const HomeSectionCardHDynamic = dynamic(() => import("../components/Dynamic/home").then(module => module.HomeSectionCardH))

  const HomeSectionCardVDynamic = dynamic(() => import("../components/Dynamic/home").then(module => module.HomeSectionCardV))

  const HomeSectionSobreDynamic = dynamic(() => import("../components/Dynamic/home").then(module => module.HomeSectionSobre))

  return(
    <>
      <HeaderDynamic title={"Upload"} description={"Perfeito para você que busca inovação digital para o seu negócio"} />
      <NavbarDynamic />
      <Stack
        as="main"
      >
        <Flex
          py={{ base: 10, md: 15, lg: 20 }}
          px={{ base: 6, md: 8, lg: 12 }}
          flexDir="column"
        >
          <HomeB1HDynamic />
          <HomeB1VDynamic />
        </Flex>
        <Stack
          spacing={{ base: 6 }}
          align="center"
          justify="center"
          bgGradient='linear(to-l, #A1D6DA, #C1C1D9)'
          py={8}
          px={6}
        >
          <Text
            as="h1"
            fontSize={{ base: "40px", lg: "48px", xl: "48px" }}
            textAlign="center"
          >
            Produtos
          </Text>
          <HomeSectionCardHDynamic />
          <HomeSectionCardVDynamic />
          <Stack
            align="center"
          >
            <ButtonsDynamic text={"Descubra"} tam={"120%"} color={"#82735c"} colorhover={"black"} bgcolor={"#ffffff4d"} bgcolorhover={"#2facfa"} rota={"/produtos"} />
          </Stack>
        </Stack>
        <HomeSectionSobreDynamic />

        <HookFormDynamic />
      </Stack>
      <FooterDynamic />
    </>

  )
}
