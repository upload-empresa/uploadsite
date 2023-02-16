/* eslint-disable react/no-unescaped-entities */
import { Heading, Stack, HStack, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"


import { Imagens } from "../components/SEO/images"
import { Links } from "../components/SEO/links"
import { LinksInternos } from "../components/SEO/linksiternos"

export default function PostBlog() {
    const HeaderDynamic = dynamic(() => import("../components/SEO/head").then(module => module.Header))
    return (
        <>
            <HeaderDynamic title={"Upload | Captar novos clientes: Como tornar seu negócio mais rentável"} description={"A captação de novos clientes tem se tornado cada vez mais desafiadora para os novos empreendedores e também para aqueles que atualmente estão se atualizando."} />

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
                        Captar novos clientes: Como tornar seu negócio mais rentável
                    </Heading>
                    <HStack
                        justify={"space-between"}
                    >
                        <HStack

                            w={"50%"}
                        >
                            <Imagens tam={{min:"40%",nvl:"25%",md:"10%",lg:"7%", xl:"7%"}} path={"/images/Group 1.png"} description={"Gabriel Botelho"} tamw={"40"} tamh={"40"} />
                            <Text
                                as="p"
                                fontSize={"14px"}
                                fontWeight={500}
                                lineHeight={"22px"}
                                color={"#171923"}
                            >
                                Gabriel Botelho
                            </Text>
                        </HStack>
                        <Text
                            as="p"
                            fontSize={"14px"}
                            fontWeight={500}
                            lineHeight={"22px"}
                            color={"#4a5568"}
                        >
                            09 Fev | Leitura: 05min
                        </Text>
                    </HStack>
                    <Imagens tam={"95%"} path={"/images/postblog.jpeg"} description={"Gabriel Botelho"} tamw={"1600"} tamh={"936"} />
                </Stack>

                <Stack
                    spacing={8}
                >
                    <Text
                        as="p"
                    >
                        A captação de novos clientes tem se tornado cada vez mais desafiadora para os novos empreendedores e também para aqueles que atualmente estão se atualizando.
                        <br /><br />
                        Muitos abrem seu próprio negócio e por falta de direcionamento no marketing da empresa acabam tendo que fechar. <q>Segundo o <Links link={"https://sebraepr.com.br/comunidade/artigo/sebrae-em-dados-sobrevivencia-de-empresas"}>Sebrae</Links>, <cite>29% dos MEI's fecham em até 5 anos.</cite></q>

                        <br /><br />
                        Mas, se você quer que seu negócio prospere, hoje a Upload, empresa de software, está aqui para te mostrar o caminho certo!
                        <br /><br />
                        <Stack
                            px={5}
                        >
                            <Text
                                as="ul"
                            >
                                <Text as="p">Portanto, nesse post você verá:</Text>
                                <Text
                                    as="li"
                                >
                                    <LinksInternos link={"#onde"} >
                                        Onde propspectar novos clientes;
                                    </LinksInternos>
                                </Text>
                                <Text
                                    as="li"
                                >
                                    <LinksInternos link={"#como"} >
                                        Como propspectar novos clientes;
                                    </LinksInternos>
                                </Text>
                            </Text>
                        </Stack>
                    </Text>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "36px", msm: "28px", min: "24px" }}
                            id={"onde"}
                        >
                            Onde prospectar novos clientes ?
                        </Heading>
                        <Text
                            as="p"
                        >
                            A maioria dos empreendedores acham que "atirar para todos os lados" em algum momento acaba acertando alguém.
                            <br /><br />
                            De fato, isso é verdade, mas é importante lembrar que todo esforço feito sempre irá gerar custos sejam eles financeiros ou de tempo.
                            <br /><br />
                            Então, pensa comigo, será que não seria melhor achar os canais de comunicação que o seu cliente mais usa e, pelo menos no início, medir gastos somente com esse canal?
                            <br /><br />
                            E, a resposta da pergunta anterior é mais que óbvia, certo?
                            <br /><br />
                            Claro que agora surgirão dúvidas, como: "eu consigo definir esses canais de comunicação sozinho?".
                            <br /><br />
                            Para isso, existem algumas ferramentas que podem te auxiliar no momento de definir esses canais dos seus clientes, basta clicar <Links link={"https://rockcontent.com/br/blog/canais-de-comunicacao/"}>aqui.</Links>
                            <br /><br />
                            Além disso, precisamos entender afundo como o seu cliente se comporta, por exemplo, algumas pessoas preferem divulgar seu trabalho em plataformas mais visuais que é o caso do Pinterest.
                            <br /><br />
                            Outros preferem divulgar no Linkedin, mas, claro, você precisa entender qual o seu cliente mais usa e se faz sentido a sua marca ir para esse canal!
                        </Text>
                    </Stack>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "36px", msm: "28px", min: "24px" }}
                            id={"como"}
                        >
                            Como prospectar novos clientes?
                        </Heading>
                        <Text
                            as="p"
                        >
                            Já tendo definido o "onde", agora temos que definir o "como".
                            <br /><br />
                            É estritamente importante você criar familiaridade com seu cliente, uma vez que, provavelmente ele não conhece a sua marca.
                            <br /><br />
                            Mas, como criar familiaridade? Vamos lá, pensa comigo, quando você vai criar uma amizade, sempre existem alguns passos a serem seguidos. A ideia é que você interaja com o seu cliente curtindo uma postagem, compartilhando, conversando com ele, enfim existem várias maneiras de interagir.
                            <br /><br />
                            Após a criação dessa familiaridade, está na hora de mostrar que a sua marca é relevante e uma autoridade no assunto. Isso irá gerar, como consequência, um relacionamento longo e duradouro.
                            <br /><br />
                            Contudo, é preciso criar conteúdos de relevância, para que você seja notado com facilidade. Então, busque aprimorar sua escrita e também as técnicas mais atuais de copywriting.
                            <br /><br />
                            E, se você não conhece ainda o que é copywriting, basta clicar <Links link={"https://growthidea.com.br/copywriting-o-texto-vendedor/"}>aqui.</Links>
                            <br /><br />
                        </Text>
                    </Stack>

                </Stack>
            </Stack>
        </>
    )
}