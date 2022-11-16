import { HStack, Stack, Heading, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import Image from "next/image"


export function HomeB1H() {
    const ButtonsDynamic = dynamic(() => import("../SEO/buttons").then(module => module.Buttons))

    return (
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
                <ButtonsDynamic text={"Embarcar"} tam={"65%"} bgcolor={'#2facfa57'} bgcolorhover={"#2facfa"} rota={"/produtos"} />
            </Stack>
            <Image src="/images/tablet.png" width="256px" height="351px" alt="Site em um Tablet" />
        </HStack>

    )
}

export function HomeB1V() {

    const ButtonsDynamic = dynamic(() => import("../SEO/buttons").then(module => module.Buttons))

    return (
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
                <ButtonsDynamic text={"Embarcar"} tam={"65%"} bgcolor={'#2facfa57'} bgcolorhover={"#2facfa"} rota={"/produtos"} />
                <Stack>
                    <Image src="/images/tablet.png" width="256px" height="351px" alt="Site em um Tablet" />
                </Stack>
            </Stack>

        </Stack>

    )
}

export function HomeSectionCardH() {
    const CardsDynamic = dynamic(() => import("../Card").then(module => module.Cards))

    return (
        <HStack
            display={{ base: 'none', lg: 'flex', xl: "flex" }}
            spacing={{ base: "0", lg: "14", xl: "14" }}
            justify='center'
            align={{ base: "center", md: "stretch", lg: "strech", xl: "stretch" }}
            flexDir={{ base: "column", lg: "row", xl: "row" }}
        >
            <CardsDynamic urlimage="/images/siteexemplo.png" tamw="256px" tamh="149px" description="Exemplo de Site" title="Sites" text="Sua empresa pode ser fora de série, possuir o melhor atendimento do mercado e oferecer um produto de altíssima qualidade. Mas, de que adiantaria tudo isso se as pessoas não encontrassem o que você faz? Ter um site é a forma mais simples de ser encontrado hoje na internet." />
            <CardsDynamic urlimage="/images/sistema.png" tamw="256px" tamh="293px" description="Exemplo de Sistema" title="Sistemas" text="A função de um sistema é otimizar as atividades operacionais que compõem a gestão do negócio ou do setor em si. Ele proporciona maior transparência e controle, seja das operações como também dos dados, melhorando assim, as suas tomadas de atitudes." />
            <CardsDynamic urlimage="/images/loja.png" tamw="256px" tamh="204px" description="Exemplo de E-commerce" title="E-commerces" text="Seu produto consegue chegar para muita gente, mas jamais atingirá o potencial total, se seu negócio não tiver uma loja virtual. Atualmente, no Brasil, vivemos uma revolução de lojas online e eu te pergunto, se é ruim, por que todo mundo faz? Ficar no método tradicional não dá mais." />
        </HStack>

    )
}

export function HomeSectionCardV() {
    const CardsDynamic = dynamic(() => import("../Card").then(module => module.Cards))

    return (
        <Stack
            display={{ base: 'flex', lg: 'none', xl: "none" }}
            spacing={{ base: 6 }}

        >
            <CardsDynamic urlimage="/images/siteexemplo.png" tamw="256px" tamh="149px" description="Exemplo de Site" title="Sites" text="Sua empresa pode ser fora de série, possuir o melhor atendimento do mercado e oferecer um produto de altíssima qualidade. Mas, de que adiantaria tudo isso se as pessoas não encontrassem o que você faz? Ter um site é a forma mais simples de ser encontrado hoje na internet." />
            <CardsDynamic urlimage="/images/sistema.png" tamw="256px" tamh="293px" description="Exemplo de Sistema" title="Sistemas" text="A função de um sistema é otimizar as atividades operacionais que compõem a gestão do negócio ou do setor em si. Ele proporciona maior transparência e controle, seja das operações como também dos dados, melhorando assim, as suas tomadas de atitudes." />
            <CardsDynamic urlimage="/images/loja.png" tamw="256px" tamh="204px" description="Exemplo de E-commerce" title="E-commerces" text="Seu produto consegue chegar para muita gente, mas jamais atingirá o potencial total, se seu negócio não tiver uma loja virtual. Atualmente, no Brasil, vivemos uma revolução de lojas online e eu te pergunto, se é ruim, por que todo mundo faz? Ficar no método tradicional não dá mais." />

        </Stack>

    )
}

export function HomeSectionSobre() {
    return (
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
    )
}