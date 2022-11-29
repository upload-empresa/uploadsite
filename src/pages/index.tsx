import { Flex, Stack, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"

import { HomeB1H, HomeB1V, HomeSectionCardH, HomeSectionCardV, HomeSectionSobre } from "../components/Dynamic/home"
import { Buttons } from "../components/SEO/buttons"


export default function Home() {
  const HookFormDynamic = dynamic(() => import("../components/contactForm/Form").then(module => module.default))
  const HeaderDynamic = dynamic(() => import("../components/SEO/head").then(module => module.Header))
  return (
    <>
      <HeaderDynamic title={"Upload"} description={"A Upload é uma empresa de software especializada em produtos web personalizados, como sites, landing pages, sistemas de gestão e lojas virtuais."} />
      <Stack
        as="main"
      >
        <Flex
          py={{ base: 10, md: 15, lg: 20 }}
          px={{ base: 6, md: 8, lg: 12 }}
          flexDir="column"
        >
          <HomeB1H/>
          <HomeB1V/>
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
          <HomeSectionCardH />
          <HomeSectionCardV />
          <Buttons text={"Descubra"} tam={{base:"60%", md:"28%", msm:"45%", xl:"18%"}} color={"#82735c"} colorhover={"black"} bgcolor={"#ffffff4d"} bgcolorhover={"#2facfa"} rota={"/produtos"} />
        </Stack>
        <HomeSectionSobre />

        <HookFormDynamic />
      </Stack>
    </>

  )
}
