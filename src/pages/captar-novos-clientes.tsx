/* eslint-disable react/no-unescaped-entities */
import { Heading, Stack, HStack, Text } from "@chakra-ui/react"

import { Imagens } from "../components/SEO/images"
import { Links } from "../components/SEO/links"

export default function PostBlog() {
    return (
        <Stack
            px={{ base: 6, md: 8, lg: 12 }}
            pt={{ base: 10, md: 15, lg: 20 }}
        >
            <Stack
                spacing={10}
            >
                <Heading
                    as="h2"
                    fontSize={"22px"}
                    fontWeight={800}
                    lineHeight={"30px"}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Heading>
                <HStack
                    justify={"space-between"}
                >
                    <HStack

                        w={"50%"}
                    >
                        <Imagens tam={"10%"} path={"/images/iba.jpg"} description={"Imagem genérica"} tamw={"356"} tamh={"200"} borderRadius={"full"} />
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
                        12 Jan | Leitura: 10min
                    </Text>
                </HStack>
                <Imagens tam={"100%"} path={"/images/iba.jpg"} description={"Imagem genérica"} tamw={"356"} tamh={"200"} />
            </Stack>

            <Stack>
                <Text
                    as="p"
                >
                    A captação de novos clientes tem se tornado cada vez mais desafiadora para os novos empreendedores e também para aqueles que atualmente estão se atualizando.
                    <br /><br />
                    Muitos abrem seu próprio negócio e por falta de direcionamento no marketing da empresa acabam tendo que fechar.<br />
                    <q>Segundo o <Links link={"https://sebraepr.com.br/comunidade/artigo/sebrae-em-dados-sobrevivencia-de-empresas"}>Sebrae</Links>, <cite>29% dos MEI's fecham em até 5 anos.</cite></q>
                    <br /><br />
                    Mas, se você quer que seu negócio prospere, hoje a Upload, empresa de software, está aqui para te mostrar o caminho certo!
                    <br /><br />
                    <Text
                        as="ul"
                    >
                        Portanto, nesse post você verá:
                        <Text
                            as="li"
                        >
                            <Links link={"onde"} >
                                Onde propspectar novos clientes;
                            </Links>
                        </Text>
                        <Text
                            as="li"
                        >
                            <Links link={"#"} >
                                Como propspectar novos clientes;
                            </Links>
                        </Text>
                        <Text
                            as="li"
                        >
                            <Links link={"#"} >
                                Atrair novos clientes;
                            </Links>
                        </Text>
                        <Text
                            as="li"
                        >
                            <Links link={"#"} >
                                Conquistar e fidelizar novos clientes;
                            </Links>
                        </Text>
                    </Text>
                </Text>
                <Heading
                    as="h2"
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
                    Para isso, existem algumas ferramentas que podem te auxiliar no momento de definir esses canais dos seus clientes, basta clicar <Links link={"#"}>aqui</Links>
                    Além disso, 

                </Text>
            </Stack>
        </Stack>
    )
}