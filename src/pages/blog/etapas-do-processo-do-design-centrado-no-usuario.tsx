/* eslint-disable react/no-unescaped-entities */
import { Heading, Stack, HStack, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"


import { Imagens } from "../../components/SEO/images"

export default function Custos() {
    const HeaderDynamic = dynamic(() => import("../../components/SEO/head").then(module => module.Header))
    return (
        <>
            <HeaderDynamic title={"Upload | Etapas do processo de Design Centrado no Usuário"} description={"UCD, ou Design Centrado no Usuário (User Centered Design), é uma abordagem de design que coloca as necessidades e preferências dos usuários como o principal foco durante o processo de desenvolvimento de produtos ou serviços."} />

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
                        Do insight à inovação: As etapas cruciais do Design Centrado no Usuário!
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
                            17 Maio | Leitura: 05min
                        </Text>
                    </HStack>
                    <Imagens tam={"95%"} path={"/images/capa-design.jpg"} description={"João Pedro Rezende"} tamw={"5000"} tamh={"3333"} />
                </Stack>

                <Stack
                    spacing={8}
                >
                    <Text
                        as="p"
                    >
                        UCD, ou Design Centrado no Usuário (User Centered Design), é uma abordagem de design que coloca as necessidades e preferências dos usuários como o principal foco durante o processo de desenvolvimento de produtos ou serviços. O UCD envolve a compreensão profunda dos usuários por meio de pesquisas, observação e feedback contínuo, a fim de criar soluções que sejam intuitivas, funcionais e agradáveis de usar. 
                        <br /><br />
                        Ao adotar essa abordagem, as empresas podem melhorar a experiência do usuário, aumentar a satisfação, a fidelidade e a usabilidade, resultando em um maior engajamento e conversões. Além disso, o UCD é fundamental para otimizar o desempenho dos sites nos mecanismos de busca, pois ao criar uma experiência centrada no usuário, as empresas estão naturalmente criando conteúdo relevante e valioso, que é um dos fatores mais importantes para o rankeamento nos motores de busca.

                        <br /><br />
                    </Text>
                    <Stack
                        spacing={5}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "36px", msm: "28px", min: "24px" }}
                        >
                            Etapas cruciais no desenvolvimento do processo de Design Centrado no Usuário!
                        </Heading>
                        <Heading
                            as="h3"
                            fontSize={{ base: "32px", msm: "24px", min: "20px" }}
                        >
                            Pesquisa de Usuário
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub01-design.jpg"} description={"Etapas cruciais no desenvolvimento do processo de Design Centrado no Usuário"} tamw={"6000"} tamh={"4000"} />
                            <br /><br />
                            Essa etapa envolve a coleta de informações sobre os usuários, suas necessidades, objetivos e contexto de uso. Podem ser realizadas entrevistas, questionários, observações e análise de dados existentes para obter insights sobre os usuários. 
                            <br /><br />
                            Ex: Em um projeto de design de um aplicativo de entrega de alimentos, a pesquisa de usuário pode revelar que muitos usuários desejam uma opção de filtragem por tipo de cozinha ou alergias alimentares.
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
                            Definição de Requisitos
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub02-design.jpg"} description={"Com base na pesquisa de usuário, é possível identificar os requisitos e as necessidades do projeto."} tamw={"3627"} tamh={"2591"} />
                            <br /><br />
                            Com base na pesquisa de usuário, é possível identificar os requisitos e as necessidades do projeto. Essa etapa envolve a síntese dos insights obtidos na pesquisa e a definição das funcionalidades e características do produto. 
                            <br /><br />
                            Ex: No mesmo projeto de entrega de alimentos, os requisitos podem incluir um sistema de classificação de restaurantes, um carrinho de compras intuitivo e a capacidade de salvar endereços de entrega favoritos.
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
                            Design de Interação
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub03-design.jpg"} description={"Design de Interação"} tamw={"3000"} tamh={"2000"} />
                            <br /><br />
                            Nessa etapa, são criados protótipos ou wireframes do produto, que representam visualmente a estrutura e a funcionalidade do projeto. Isso permite testar a usabilidade e a navegabilidade do produto. 
                            <br /><br />
                            Ex: No design de um aplicativo de reserva de voos, é possível criar protótipos de baixa fidelidade que mostram a sequência de telas, os botões de ação e as opções de personalização.
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
                            Testes de Usabilidade
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub04-design.jpg"} description={"os protótipos ou o produto em fase inicial são testados pelos usuários para avaliar sua usabilidade e identificar possíveis problemas ou melhorias."} tamw={"5342"} tamh={"3561"} />
                            <br /><br />
                            Aqui, os protótipos ou o produto em fase inicial são testados pelos usuários para avaliar sua usabilidade e identificar possíveis problemas ou melhorias. Isso pode ser feito por meio de testes individuais, onde os usuários realizam tarefas específicas enquanto são observados, ou por meio de estudos de campo, onde o produto é usado em um ambiente natural.
                            <br /><br />
                            Ex: No teste de usabilidade de um site de comércio eletrônico, os usuários podem ser solicitados a encontrar um produto, adicionar ao carrinho e concluir a compra, enquanto os pesquisadores observam suas ações e identificam possíveis obstáculos ou confusões.
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
                            Design Visual
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub04-design.jpg"} description={"Após a validação da usabilidade, é hora de criar o design visual do produto, aplicando a identidade visual da marca, escolhendo cores, tipografia, layouts e elementos visuais adequados."} tamw={"5978"} tamh={"4000"} />
                            <br /><br />
                            Após a validação da usabilidade, é hora de criar o design visual do produto, aplicando a identidade visual da marca, escolhendo cores, tipografia, layouts e elementos visuais adequados. O design visual deve ser atraente, intuitivo e consistente com as expectativas dos usuários.
                            <br /><br />
                            Ex: No design visual de um aplicativo de rede social, é importante considerar a aparência, a acessibilidade e a legibilidade do conteúdo, além de refletir a identidade da marca.
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
                            Desenvolvimento e Implementação
                        </Heading>
                        <Text
                            as="p"
                        >
                            <Imagens tam={"100%"} path={"/images/sub04-design.jpg"} description={"os designs aprovados são transformados em um produto funcional. Os desenvolvedores trabalham na implementação das interfaces, funcionalidades e integrações necessárias."} tamw={"1280"} tamh={"665"} />
                            <br /><br />
                            Nesta etapa, os designs aprovados são transformados em um produto funcional. Os desenvolvedores trabalham na implementação das interfaces, funcionalidades e integrações necessárias. É importante que haja uma comunicação contínua entre os designers e os desenvolvedores para garantir que o design seja fielmente traduzido em código.
                            <br /><br />
                            Ex: No desenvolvimento de um aplicativo de planejamento de viagens, nessa fase é verificado se a reserva de passagens aéreas é feita corretamente, se os dados do hotel são exibidos corretamente e se as informações do itinerário são atualizadas conforme necessário.
                            <br /><br />
                            Ao entender as necessidades, expectativas e desafios dos usuários, podemos criar soluções que atendam às suas demandas de maneira eficaz. Se você deseja impulsionar a inovação e oferecer produtos de alta qualidade, é hora de deixar o seu negócio um passo à frente com a Upload!
                            <br /><br />
                        </Text>
                    </Stack>

                </Stack>
            </Stack>
        </>
    )
}