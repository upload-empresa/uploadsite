/* eslint-disable react/no-unescaped-entities */
import { Heading, Stack, HStack, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"


import { Imagens } from "../../components/SEO/images"
import { Links } from "../../components/SEO/links"

export default function Vantagens() {
    const HeaderDynamic = dynamic(() => import("../../components/SEO/head").then(module => module.Header))
    return (
        <>
            <HeaderDynamic title={"Upload | As vantagens de ter um site para o seu negócio!"} description={"Muito além de levar o seu público até o seu negócio, a presença digital oferece maior segurança para quem busca pelos seus produtos ou serviços."} />

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
                        As vantagens de ter um site para o seu negócio!
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
                            03 Maio | Leitura: 05min
                        </Text>
                    </HStack>
                    <Imagens tam={"95%"} path={"/images/pexels.jpg"} description={"João Pedro Rezende"} tamw={"5184"} tamh={"3888"} />
                </Stack>

                <Stack
                    spacing={8}
                >
                    <Text
                        as="p"
                    >
                        Muitos se perguntam sobre as vantagens de ter um site para o seu próprio negócio, mas você sabe como foi popularizado o uso de sites pelas empresas?
                        <br /><br />
                        Na década de 90, com a popularização da internet e o decorrente aumento da sua acessibilidade para o público geral, as grandes marcas passaram a se lançar na plataforma com seus próprios sites. Ainda no início, os websites possuíam uma função muito mais estética do que de interatividade e funcionalidade. Hoje, nota-se no mercado uma rápida evolução nas técnicas de aprimoramento de vendas online e presença digital por meio dos sites das empresas.

                        <br /><br />
                        Com essa rápida transformação no mundo dos negócios, os empreendedores têm investido na criação de seus próprios sites para alavancar os seus empreendimentos. Isso se deve às diversas vantagens para uma empresa possuir um website.
                        <br /><br />
                    </Text>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "36px", msm: "28px", min: "24px" }}
                        >
                            3 vantagens para criar um site para o seu próprio negócio!
                        </Heading>
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                        >
                            Facilidade de acesso à informação
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/SUBTÍTULO 1-min.jpg"} description={"Ter seu próprio site é vantajoso para facilitar o acesso do consumidor até o seu produto ou serviço."} tamw={"6000"} tamh={"4000"} />
                            <br /><br />
                            Segundo um levantamento da Math Ads, empresa especializada em gestão de mídias digitais, <Links link={"https://veja.abril.com.br/coluna/radar/nove-em-cada-dez-brasileiros-pesquisam-na-internet-antes-de-fazer-compra/"} >nove em cada dez brasileiros pesquisam por produtos e serviços antes de realizar compras.</Links> Ter seu próprio site é vantajoso para facilitar o acesso do consumidor até o seu produto ou serviço. Por exemplo: quando pensamos em trocar um laptop, é comum consultarmos os preços na internet antes.
                            <br /><br />
                            Para isso, o consumidor precisa ter o seu empreendimento como referência digital para oferecer as informações que ele precisa sobre o assunto. E, a maneira mais assertiva de entregar essa indicação é ter um website qualificado e completo.
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
                            <Imagens tam={"100%"} path={"/images/SUBTÍTULO 2-min.jpg"} description={"Muito além de levar o seu público até o seu negócio, a presença digital oferece maior segurança para quem busca pelos seus produtos ou serviços."} tamw={"7360"} tamh={"4912"} />
                            <br /><br />
                            Muito além de levar o seu público até o seu negócio, a presença digital oferece maior segurança para quem busca pelos seus produtos ou serviços. Possuir um website é sinônimo de estar atualizado ao mercado. Mas, ainda sim é importante garantir provas sociais, por meio de depoimentos de cliente ou selos de qualidade, para que seja formado um bom “portfólio” do atendimento e das entregas do seu negócio. Afinal, uma recomendação pode mudar toda a trajetória do seu cliente até a decisão final.
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
                            Possibilidade de vendas online e contato direto com o cliente
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/SUBTÍTULO 3-min.jpg"} description={"Isso significa uma forte pressão para os negócios se colocarem na plataforma e oferecerem atendimento e possibilidade de compras online."} tamw={"1280"} tamh={"961"} />
                            <br /><br />
                            Por meio de um estudo, a Retail X concluiu que <Links link={"https://www.ecommercebrasil.com.br/noticias/e-commerce-brasileiro-tem-o-maior-crescimento-da-america-latina"} >o Brasil teve o e-commerce com o maior crescimento na América Latina, em 2022.</Links> Isso significa uma forte pressão para os negócios se colocarem na plataforma e oferecerem atendimento e possibilidade de compras online. Além disso, é relevante ressaltar que a internet traz a forte vantagem de viabilizar o contato direto com o público para auxiliar no processo de compra, ou até mesmo, de transformar a dúvida do seu cliente numa oportunidade de venda instantânea!
                            <br /><br />
                            Como dito anteriormente, não basta apenas ter um site, é preciso ter uma plataforma de qualidade! Para garantir a certeza de rapidez, harmonia e funcionalidade, a <Links link={"https://www.instagram.com/upload_tech/"} >Upload</Links> oferece um time de especialistas que utilizam das técnicas mais atualizadas de programação para criar o seu site. E aí, bora deixar sua empresa um passo à frente das demais?
                            <br /><br />
                        </Text>
                    </Stack>

                </Stack>
            </Stack>
        </>
    )
}