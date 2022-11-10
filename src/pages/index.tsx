import { Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { Cards } from "../components/Card"
import { Footer } from "../components/Footer"
import Image from 'next/image'
import NextLink from 'next/link'

import { Navbar } from "../components/Navbar"

import HookForm from "../components/contactForm/Form"

import { NextPage } from "next"
import { Header } from "../components/SEO/head"


const Home: NextPage = () => {
  return (
    <>
      <Header title={"Upload"} description={"Perfeito para você que busca inovação digital para o seu negócio"} />
      <Navbar />
      <Stack
        as="main"
      >
        <Flex
          py={{ base: 10, md: 15, lg: 20 }}
          px={{ base: 6, md: 8, lg: 12 }}
          flexDir="column"
        >
          <HStack
            display={{ base: 'none', lg: 'flex', xl: "flex" }}
            justify="center"
            flexDir={{ base: "column", lg: "row", xl: "row" }}
            spacing={{ base: "5%", md: "5%", lg: "0%", xl: "0%" }}
          >
            <Stack
              justify="center"
              align="center"
              flexDir="column"
              w={{ base: "100%", lg: "36%", xl: "36%" }}
              spacing={4}
            >
              <Heading
                fontSize={{ base: "40px", lg: "48px", xl: "48px" }}
                as="h1"
                w="80%"
                position="relative"
                fontWeight="400"
                _before={{
                  content: '""',
                  bgImage: "url('/images/listra.png')",
                  bgSize: { sm: "82%", msm: '96%', md: "42%", lg: "88%", xl: "90%" },
                  pos: "absolute",
                  backgroundRepeat: 'no-repeat',
                  top: { sm: '14%', msm: '-13%', md: "-16%", lg: '12%', xl: '-10%' },
                  zIndex: -1,
                  bottom: '0%',
                  left: { sm: '-7%', msm: '24%', md: "13%", lg: '-4%', xl: '25%' },
                  right: '0%',
                }}
              >
                Sua empresa sempre um passo à frente
              </Heading>
              <Button
                w="65%"
                fontSize={{ base: "28px", lg: "32px", xl: "32px" }}
                fontWeight="500"
                background='#2facfa57'
                py={8}
                transition="ease-in 0.2s all"
                transitionDelay="50ms"
                px={4}
                borderRadius="full"
                _hover={{
                  bg: "#2facfa"
                }}
              >
                Embarcar
              </Button>
            </Stack>
            <Image src="/images/tablet.png" width="200%" height="250%" alt="Site em um Tablet" />
          </HStack>
          <Stack
            display={{ base: 'flex', lg: 'none', xl: "none" }}
            spacing={{ base: 6 }}
          >
            <Stack
              justify="center"
              align="center"
              flexDir="column"
              w={{ base: "100%", lg: "36%", xl: "36%" }}
              spacing={4}
            >
              <Heading
                fontSize={{ base: "40px", lg: "48px", xl: "48px" }}
                as="h1"
                w="80%"
                position="relative"
                fontWeight="400"
                _before={{
                  content: '""',
                  bgImage: "url('/images/listra.png')",
                  bgSize: { sm: "82%", msm: '96%', md: "42%", lg: "88%", xl: "90%" },
                  pos: "absolute",
                  backgroundRepeat: 'no-repeat',
                  top: { sm: '14%', msm: '-13%', md: "-16%", lg: '12%', xl: '-10%' },
                  zIndex: -1,
                  bottom: '0%',
                  left: { sm: '-7%', msm: '24%', md: "13%", lg: '-4%', xl: '25%' },
                  right: '0%',
                }}
              >
                Sua empresa sempre um passo à frente
              </Heading>
              <NextLink href={"/produtos"} passHref>
                <Button
                  w="65%"
                  fontSize={{ base: "28px", lg: "32px", xl: "32px" }}
                  fontWeight="500"
                  background='#2facfa57'
                  py={8}
                  transition="ease-in 0.2s all"
                  transitionDelay="50ms"
                  px={4}
                  borderRadius="full"
                  _hover={{
                    bg: "#2facfa"
                  }}
                >
                  Embarcar
                </Button>
              </NextLink>
              <Stack>
                <Image src="/images/tablet.png" width="200%" height="250%" alt="Site em um Tablet" />
              </Stack>
            </Stack>

          </Stack>
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
          <HStack
            display={{ base: 'none', lg: 'flex', xl: "flex" }}
            spacing={{ base: "0", lg: "14", xl: "14" }}
            justify='center'
            align={{ base: "center", md: "stretch", lg: "strech", xl: "stretch" }}
            flexDir={{ base: "column", lg: "row", xl: "row" }}
          >
            <Cards urlimage="/images/siteexemplo.png" tamw="200%" tamh="120%" description="Exemplo de Site" title="Sites" text="Sua empresa pode ser fora de série, possuir o melhor atendimento do mercado e oferecer um produto de altíssima qualidade. Mas, de que adiantaria tudo isso se as pessoas não encontrassem o que você faz? Ter um site é a forma mais simples de ser encontrado hoje na internet." />
            <Cards urlimage="/images/sistema.png" tamw="150%" tamh="150%" description="Exemplo de Sistema" title="Sistemas" text="A função de um sistema é otimizar as atividades operacionais que compõem a gestão do negócio ou do setor em si. Ele proporciona maior transparência e controle, seja das operações como também dos dados, melhorando assim, as suas tomadas de atitudes." />
            <Cards urlimage="/images/loja.png" tamw="170%" tamh="150%" description="Exemplo de E-commerce" title="E-commerces" text="Seu produto consegue chegar para muita gente, mas jamais atingirá o potencial total, se seu negócio não tiver uma loja virtual. Atualmente, no Brasil, vivemos uma revolução de lojas online e eu te pergunto, se é ruim, por que todo mundo faz? Ficar no método tradicional não dá mais." />
          </HStack>
          <Stack
            display={{ base: 'flex', lg: 'none', xl: "none" }}
            spacing={{ base: 6 }}

          >
            <Cards urlimage="/images/siteexemplo.png" tamw="200%" tamh="120%" description="Exemplo de Site" title="Sites" text="Sua empresa pode ser fora de série, possuir o melhor atendimento do mercado e oferecer um produto de altíssima qualidade. Mas, de que adiantaria tudo isso se as pessoas não encontrassem o que você faz? Ter um site é a forma mais simples de ser encontrado hoje na internet." />
            <Cards urlimage="/images/sistema.png" tamw="150%" tamh="150%" description="Exemplo de Sistema" title="Sistemas" text="A função de um sistema é otimizar as atividades operacionais que compõem a gestão do negócio ou do setor em si. Ele proporciona maior transparência e controle, seja das operações como também dos dados, melhorando assim, as suas tomadas de atitudes." />
            <Cards urlimage="/images/loja.png" tamw="170%" tamh="150%" description="Exemplo de E-commerce" title="E-commerces" text="Seu produto consegue chegar para muita gente, mas jamais atingirá o potencial total, se seu negócio não tiver uma loja virtual. Atualmente, no Brasil, vivemos uma revolução de lojas online e eu te pergunto, se é ruim, por que todo mundo faz? Ficar no método tradicional não dá mais." />

          </Stack>
          <Stack
            align="center"
          >
            <NextLink href={"/produtos"} passHref>
              <Button
                w="120%"
                fontSize="32px"
                fontWeight="500"
                py={8}
                px={4}
                background='#ffffff4d'
                color="#82735c"
                borderRadius="full"
                transition="ease-in 0.2s all"
                transitionDelay="50ms"
                _hover={{
                  bg: "#2facfa",
                  color: "black"
                }}
              >
                Descubra
              </Button>
            </NextLink>
          </Stack>
        </Stack>
        <HStack
          p={4}
          flexDir={{ base: "column", msm: "column", md: "column", lg: "row", xl: "row" }}
          justify="center"
          align={{ base: "center", lg: "start", xl: "start" }}
          spacing={8}
        >
          <Stack
            w={{ sm: "100%", msm: "100%", lg: "50%", xl: "50%" }}
            p={{ base: "0", lg: "8", xl: "8" }}
            align={{ base: "center", msm: "center", md: "center", lg: "start", xl: "start" }}
          >
            <Text
              as="h1"
              fontSize={{ base: "40px", lg: "48px", xl: "48px" }}
            >
              Sobre Nós
            </Text>
            <Text
              as="p"
              fontSize={{ base: "20px", lg: "24px", xl: "24px" }}
              color="#5C5142"
            >
              A história da Upload começa junto com a necessidade das empresas de se atualizarem no novo mercado de trabalho. Nossos produtos são feitos sempre pensando no melhor desempenho do consumidor, portanto utilizamos as estratégias e tecnologias mais atualizadas do mercado, como Design UI/UX e SEO.
            </Text>
          </Stack>
          <Stack
            w="35%"
            p={{ base: 0, lg: 8, xl: 8 }}
          >
            <Image src="/images/sobrenos.png" width={"200%"} height={"350%"} alt="Sobre Nós" />
          </Stack>
        </HStack>

        <HookForm />
      </Stack>
      <Footer />
    </>

  )
}

export default Home
