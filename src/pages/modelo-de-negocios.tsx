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
            <HeaderDynamic title={"Upload | Modelo de negócios: como criar um modelo de negócios"} description={"Muitas pessoas acreditam que para você se destacar no mercado precisa necessariamente ter uma ideia completamente original e inovadora."} />

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
                        Modelo de negócios: como criar um modelo de negócios
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
                            16 Fev | Leitura: 05min
                        </Text>
                    </HStack>
                    <Imagens tam={"95%"} path={"/images/pexels.jpg"} description={"Gabriel Botelho"} tamw={"5184"} tamh={"3888"} />
                </Stack>

                <Stack
                    spacing={8}
                >
                    <Text
                        as="p"
                    >
                        Muitas pessoas acreditam que para você se destacar no mercado precisa necessariamente ter uma ideia completamente original e inovadora.
                        <br /><br />
                        Porém, isso não é verdade e eu posso provar. Conhece a Amazon? Já ouviu falar da Renner? Enfim, poderia ficar listando inúmeras empresas que trabalham ou começaram trabalhando com produtos simples.

                        <br /><br />
                        Então, o que será que tornou essas empresas gigantescas? Primeiramente, planejamento, porque é impossível criar algo grande e sólido sem um planejamento por trás.
                        <br /><br />
                        A ideia que eu quero passar é que antes de tudo está ativo é estritamente necessário montar um passo a passo, ou seja, um modelo de negócio.
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
                                    <LinksInternos link={"#oquee"} >
                                        O que é modelo de negócios;
                                    </LinksInternos>
                                </Text>
                                <Text
                                    as="li"
                                >
                                    <LinksInternos link={"#como"} >
                                        Como fazer um modelo de negócios;
                                    </LinksInternos>
                                </Text>
                                <Text
                                    as="li"
                                >
                                    <LinksInternos link={"#canvas"} >
                                        Canvas modelo de negócio;
                                    </LinksInternos>
                                </Text>
                                <Text
                                    as="li"
                                >
                                    <LinksInternos link={"#exemplo"} >
                                        Exemplo de modelo de negócios;
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
                            id={"oquee"}
                        >
                            O que é modelo de negócios
                        </Heading>
                        <Text
                            as="p"
                        >
                            Toda empresa precisa ter uma visão geral de como o seu produto entregará valor ao seu cliente! E, foquem na palavra valor, visto que, nos dias atuais, as pessoas precisam muito mais de uma solução do que simplesmente um produto.
                            <br /><br />
                            Basicamente, você precisará elencar todas as suas principais ações e os impactos que elas têm umas com as outras.
                            <br /><br />
                            Dessa forma, ficará evidente os pontos fortes e fracos do seu negócio e acredite é impossível seu negócio não ter ponto fraco.
                            <br /><br />
                            Assim, você conseguirá definir, em média, o prazo para sua empresa se tornar rentável!
                            <br /><br />
                            Se você ainda achou que não está claro, continue lendo que vou te mostrar alguns exemplos.
                            <br /><br />
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
                            Como fazer um modelo de negócios
                        </Heading>
                        <Text
                            as="p"
                        >
                            O pensamento que você deve ter ao escrever seu modelo de negócios é o “como”, por exemplo, como vou me destacar no mercado, como vou gerar valor para o meu cliente, como vou conseguir fidelizá-lo, como vai ser minha renda, entre outros.
                            <br /><br />
                            E, sei que talvez, você possa ficar em dúvida na quantidade de “como” que teria que levantar e quais deles seriam cruciais para o desenvolvimento do seu negócio.
                            <br /><br />
                            Para isso, foi criado o Canvas de Modelo de Negócios, ele é uma ferramenta voltada para auxiliar você, empreendedor, a ter uma visão geral melhor do seu negócio. Ele ficou conhecido por ser uma maneira simples e rápida de mapear a sua ideia.
                            <br /><br />
                            Agora, vou te mostrar como ele é.
                            <br /><br />
                        </Text>
                    </Stack>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "36px", msm: "28px", min: "24px" }}
                            id={"canvas"}
                        >
                            Canvas Modelo de Negócio
                        </Heading>
                        <Text
                            as="p"
                        >
                            Falando de forma prática, o canvas é um quadro que é dividido em nove blocos, sendo eles usados para mapear diferentes campos do seu negócio e/ou ideia!
                            <br /><br />
                            <Imagens tam={"100%"} path={"/images/Parcerias Chave.png"} description={"Canvas Modelo de Negócio"} tamw={"640"} tamh={"381"} />
                            <br /><br />
                            Vou te explicar quadro por quadro, na ordem recomendada e, no final, te mostrarei o canvas da Netflix!
                            <br /><br />
                            Antes disso, queria te fazer uma proposta, bora ir montando o seu canvas junto comigo?
                            Para baixar o canvas modelo de negócio, <Links link={"/images/Parcerias Chave.png"} donwload={"Canvas Modelo de Negócio - Upload"} >clique aqui.</Links>
                        </Text>
                    </Stack>

                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                        >
                            Segmentos de Mercado
                        </Heading>
                        <Text
                            as="p"
                        >
                            Para você que já tem uma persona definida, o processo ficará mais fácil, mas caso não tenha, conseguirá realizar do mesmo jeito, basta pensar em um perfil de cliente ideal que compraria o seu produto.
                            <br /><br />
                            Pense da seguinte forma, o que meu produto ajuda a solucionar? E, baseado na resposta anterior, raciocine quem seria o público alvo ideal e escreva neste campo.
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
                            Proposta de Valor
                        </Heading>
                        <Text
                            as="p"
                        >
                            Esse quadro é voltado para você definir o que sua empresa quer entregar, ou seja, seu produto. Mas, não se engane, é impossível se destacar no mercado e crescer somente tendo um produto, portanto é necessário que você tenha um diferencial.
                            <br /><br />
                            E, não confunda com o que eu havia dito no início deste post, você realmente não precisa ter uma ideia cem por cento inovadora, porém, sempre precisará de ter um diferencial dos seus concorrentes.
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
                            Canais
                        </Heading>
                        <Text
                            as="p"
                        >
                            Aqui você deve pensar em onde o seu cliente comprará e utilizará o seu produto, talvez seja um produto virtual, portanto ele compraria por uma plataforma na internet e também utilizaria através dessa plataforma.                            <br /><br />
                            Realmente isso dependerá do seu modelo de negócios.                            <br /><br />
                        </Text>
                    </Stack>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                        >
                            Relações com cliente
                        </Heading>
                        <Text
                            as="p"
                        >
                            Lembra <Links link={"https://www.uploadempresa.com/captar-novos-clientes"} >deste post</Links> que nós escrevemos falando sobre “onde prospectar novos clientes”, aqui falamos sobre definir um canal de comunicação onde seu cliente ideal irá interagir com você.
                            <br /><br />
                            E, é exatamente isso que deve ser feito aqui. Definir um canal de comunicação, que seu cliente ideal mais utiliza e preencher este campo.                            <br /><br />
                        </Text>
                    </Stack>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                        >
                            Fonte de Renda
                        </Heading>
                        <Text
                            as="p"
                        >
                            Para este quadro você deve listar todos os tipos de formas de ganho que você imagina para o seu negócio, podendo incluir até <Links link={"https://growthidea.com.br/marketing-digital-como-criar-uma-boa-estrategia/"}>estratégias de marketing</Links> que farão com que seu negócio lucre.
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
                            Atividades Chave
                        </Heading>
                        <Text
                            as="p"
                        >
                            Descreva qual é a sua proposta de valor, por exemplo se você fosse vender cursos online seria desenvolvimento da plataforma e dos vídeos.
                            <br /><br />
                            A ideia é colocar a principal atividade para que consiga desenvolver o seu produto.
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
                            Recursos Chave
                        </Heading>
                        <Text
                            as="p"
                        >
                            Nesse quadro, escreva o que sua empresa precisa ter ou fazer, para que consiga colocar em atividade o seu produto.
                            <br /><br />
                            Um bom exemplo seria, capital, programadores, estilistas, entre outros.
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
                            Parcerias Chave
                        </Heading>
                        <Text
                            as="p"
                        >
                            No penúltimo quadro é necessário que vocês preencham com parcerias que colaborem e/ou sejam essenciais para a distribuição do seu produto, como fornecedores, terceirizações, entre outros.
                            <br /><br />
                            Lembrem-se de pensar de forma estratégica nessas parcerias, afinal de contas é um ponto importantíssimo para a vida útil da sua empresa.                            <br /><br />
                        </Text>
                    </Stack>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                            id={"como"}
                        >
                            Estruturas de Custo
                        </Heading>
                        <Text
                            as="p"
                        >
                            O último quadro é o de custos. Nele você precisa listar todos os possíveis custos que você terá ao fazer, manter e até para divulgar o seu produto.
                            <br /><br />
                            Essa parte é essencial até para tomadas de decisões, afinal de contas depois da listagem vai ser possível perceber o valor que terá de dar ao seu produto, para que ele não te dê prejuízo nem a curto nem a longo prazo!
                            <br /><br />
                        </Text>
                    </Stack>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "36px", msm: "28px", min: "24px" }}
                            id={"exemplo"}
                        >
                            Exemplo de Modelo de Negócios
                        </Heading>
                        <Text
                            as="p"
                        >
                            E, agora para finalizar, vamos mostrar o canvas da Netflix!
                            <br /><br />
                            <Imagens tam={"100%"} path={"/images/Modelo de Negócio da Netflix.png"} description={"Canvas Modelo de Negócios da Netflix"} tamw={"640"} tamh={"381"} />
                            <br /><br />
                            Caso queiram baixar basta <Links link={"/images/Modelo de Negócio da Netflix.png"} donwload={"Canvas Modelo de Negócio da Netflix"}>clicar aqui</Links>. Recomendo que vocês vão comparar o canvas da Netflix com as explicações de cada bloco do canvas para ficar mais fácil de construir o de vocês.
                            <br /><br />
                            Conseguiram perceber o quanto sua empresa pode crescer com um simples planejamento?
                            Com certeza se fizerem da forma correta isso trará muito valor para seu negócio.
                            <br /><br />
                        </Text>
                    </Stack>

                </Stack>
            </Stack>
        </>
    )
}