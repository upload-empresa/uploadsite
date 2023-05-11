/* eslint-disable react/no-unescaped-entities */
import { Heading, Stack, HStack, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"


import { Imagens } from "../../components/SEO/images"
import { Links } from "../../components/SEO/links"

export default function Custos() {
    const HeaderDynamic = dynamic(() => import("../../components/SEO/head").then(module => module.Header))
    return (
        <>
            <HeaderDynamic title={"Upload | Custos ocultos ao não contratar uma empresa especializada para criar o seu site"} description={"Você sabia que criar o seu site por conta própria ou por empresas de outros ramos pode acarretar custos ocultos na gestão do seu negócio?"} />

            <Stack
                px={{ min: 12, sm: 12, msm: 24, md: 40, lg: 60 }}
                pt={{ base: 10, md: 15, lg: 20 }}
                spacing={8}
            >
                <Stack
                    spacing={10}
                >
                    <Heading
                        as="h2"
                        fontSize={{ base: "40px", msm: "32px", min: "28px" }}
                        fontWeight={800}
                        lineHeight={"1.3em"}
                    >
                        Descubra os custos ocultos quando não se contrata uma empresa especializada para criar o seu site!
                    </Heading>
                    <HStack
                        justify={"space-between"}
                    >
                        <HStack

                            w={"50%"}
                        >
                            <Imagens tam={{ min: "40%", nvl: "25%", md: "10%", lg: "7%", xl: "7%" }} path={"/images/Group 1.png"} description={"João Pedro Rezende"} tamw={"40"} tamh={"40"} />
                            <Text
                                as="p"
                                fontSize={"14px"}
                                fontWeight={500}
                                lineHeight={"22px"}
                                color={"#171923"}
                            >
                                João Pedro Rezende
                            </Text>
                        </HStack>
                        <Text
                            as="p"
                            fontSize={"14px"}
                            fontWeight={500}
                            lineHeight={"22px"}
                            color={"#4a5568"}
                        >
                            11 Maio | Leitura: 05min
                        </Text>
                    </HStack>
                    <Imagens tam={"95%"} path={"/images/capa-custos.jpg"} description={"João Pedro Rezende"} tamw={"1280"} tamh={"854"} />
                </Stack>

                <Stack
                    spacing={8}
                >
                    <Text
                        as="p"
                    >
                        Você sabia que criar o seu site por conta própria ou por empresas de outros ramos pode acarretar custos ocultos na gestão do seu negócio? Com a popularização do uso das redes sociais no mundo corporativo, alguns empreendedores colocaram a criação de um site em segundo plano.
                        <br /><br />
                        Os custos ocultos são os gastos adicionais e imprevistos que surgem ao criar um site sem a ajuda de uma empresa especializada. Esses custos podem impactar significativamente aqueles que optam por assumir a tarefa por conta própria ou por contratar uma empresa de outro nicho do mercado.

                        <br /><br />
                    </Text>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "36px", msm: "28px", min: "24px" }}
                        >
                            4 possíveis custos ocultos ao não contratar uma empresa especializada em criação de sites.
                        </Heading>
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                        >
                            Custo de oportunidade
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub01-custos.jpg"} description={"Ao investir seu tempo e recursos na criação de um site, você está abrindo mão de outras oportunidades de crescimento do seu negócio."} tamw={"1280"} tamh={"676"} />
                            <br /><br />
                            Ao investir seu tempo e recursos na criação de um site, você está abrindo mão de outras oportunidades de crescimento do seu negócio. O custo de oportunidade refere-se aos benefícios que poderiam ser obtidos ao direcionar esses recursos para atividades mais estratégicas, como marketing, vendas e desenvolvimento de produtos.
                            <br /><br />
                        </Text>
                    </Stack>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                        >
                            Garantia de credibilidade
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub02-custos.jpg"} description={" A estética e usabilidade do site são fatores cruciais para atrair e envolver os visitantes."} tamw={"1280"} tamh={"853"} />
                            <br /><br />
                            Segundo um <Links link={"https://rockcontent.com/br/blog/experiencia-do-usuario/"} >artigo da empresa Rock Content:</Links> “Uma boa experiência do usuário é sinônimo de maiores possibilidades de atração, conversão e fechamento de oportunidades de venda.”
                            <br /><br />
                            A estética e usabilidade do site são fatores cruciais para atrair e envolver os visitantes. Sem a expertise em design, você pode criar um site com uma aparência amadora, navegação confusa e má usabilidade, o que pode afetar negativamente a experiência do usuário e, consequentemente, a credibilidade e o sucesso do seu negócio online.
                            <br /><br />
                        </Text>
                    </Stack>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                        >
                            Otimização para mecanismos de busca (SEO) ineficiente
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub03-custos.jpg"} description={"a otimização para mecanismos de busca é fundamental para melhorar a visibilidade do seu site nos resultados de pesquisa."} tamw={"1280"} tamh={"854"} />
                            <br /><br />
                            SEO ou Search Engine Optimization (Otimização para Mecanismos de Busca) é um conjunto de estratégias e técnicas aplicadas em um site para melhorar sua visibilidade nos resultados orgânicos (não pagos) dos mecanismos de busca, como o Google, Bing e Yahoo. O objetivo do SEO é aumentar a qualidade e a quantidade do tráfego de um site por meio de classificações mais altas nos resultados de pesquisa relevantes para o conteúdo do site.
                            <br /><br />
                            De acordo com uma pesquisa da desenvolvedora Hubspot, <Links link={"https://blog.hubspot.com/insiders/inbound-marketing-stats"} >75% das pessoas</Links> não vão além da página 1 do mecanismo de busca. Portanto, a otimização para mecanismos de busca é fundamental para melhorar a visibilidade do seu site nos resultados de pesquisa. A falta de conhecimentos adequados em SEO pode resultar em erros técnicos, estrutura inadequada do site, falta de palavras-chave relevantes e conteúdo mal otimizado, prejudicando seu posicionamento nos mecanismos de busca.
                            <br /><br />
                        </Text>
                    </Stack>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                        >
                            Segurança e proteção de dados
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub04-custos.jpg"} description={"A falta de conhecimentos técnicos pode tornar seu site vulnerável a ataques cibernéticos e invasões, colocando em risco tanto a reputação do seu negócio quanto a confiança dos clientes."} tamw={"1280"} tamh={"665"} />
                            <br /><br />
                            A instauração da <Links link={"https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"} >Lei Geral de Proteção de Dados (LGPD)</Links> no Brasil, em agosto de 2018, trouxe mudanças significativas para os sites corporativos em relação à coleta, armazenamento e processamento de dados pessoais. A segurança do site é crucial para proteger informações confidenciais dos usuários e manter a integridade dos dados. A falta de conhecimentos técnicos pode tornar seu site vulnerável a ataques cibernéticos e invasões, colocando em risco tanto a reputação do seu negócio quanto a confiança dos clientes.
                            <br /><br />
                            Embora possa parecer uma economia inicial, os desafios técnicos, a falta de expertise em design, a má otimização para mecanismos de busca e os potenciais riscos de segurança podem custar caro a longo prazo. Além disso, o tempo e os recursos investidos na criação e manutenção do site podem ser mais bem direcionados para outras áreas estratégicas do seu negócio. 
                            <br /><br />
                            Ao optar por uma empresa especializada, você contará com profissionais experientes que podem oferecer um site profissional, funcional e seguro, garantindo a melhor experiência para os usuários e impulsionando o sucesso do seu negócio online. Portanto, não subestime a importância de investir em uma empresa especializada para criar o seu site e evite os custos ocultos que podem surgir ao tentar fazer tudo sozinho.
                            <br /><br />
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}