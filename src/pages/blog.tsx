import { Button, Grid, GridItem, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react"


export default function Blog() {


    return (
        <Stack
            as="main"
        >
            <HStack
                px={{ base: 6, md: 8, lg: 12 }}
                py={{ base: 10, md: 15, lg: 20 }}
            >
                <Stack
                    w={"50%"}
                    spacing={6}
                >
                    <Heading
                        as="h1"
                        fontSize={"48px"}
                        lineHeight={"60px"}
                        fontWeight={500}
                    >
                        Aqui você encontra aquele <Text as="span" color="#2facfa" >impulso que o seu negócio precisa</Text>
                    </Heading>
                    <Text
                        as="p"
                        fontSize={"20px"}
                        lineHeight={"30px"}
                        color="#82735C"
                    >
                        Seja bem-vindo ao blog da Upload. Aprenda sobre como alavancar, organizar e desenvolver seu negócio usando as melhores ferramentas e estratégias do mercado.
                    </Text>
                    <Button
                        as="button"
                        w={"40%"}
                        fontSize={{ base: "28px", lg: "20px", xl: "20px" }}
                        fontWeight="600"
                        background={"#2facfa57"}
                        py={6}
                        color={"black"}
                        transition="ease-in 0.2s all"
                        transitionDelay="50ms"
                        px={4}
                        borderRadius="full"
                        _hover={{
                            bg: "#2facfa57",
                            color: "black"
                        }}

                    >
                        Inscreva-se
                    </Button>
                </Stack>
                {/* <Imagens tam={undefined} path={""} description={""} tamw={"500"} tamh={"500"} /> */}
            </HStack>
            <Stack
                px={{ base: 6, md: 8, lg: 12 }}
                py={{ base: 10, md: 15, lg: 20 }}
            >
                <Grid
                    bg="white"
                    borderRadius="8px"
                    boxShadow={"5px 6px 8px 1px #00000054"}
                    p={8}
                    templateAreas={`"h h h"
                      "n m f"`}
                    gridTemplateRows={'1fr 1.3fr '}
                    gridTemplateColumns={'1fr 1fr 1fr'}
                    h='700px'
                    gap='4'
                    color='blackAlpha.700'
                    fontWeight='bold'
                >
                    <GridItem pl='2' bg='orange.300' area={'h'}>
                        Header
                    </GridItem>
                    <GridItem pl='2' bg='pink.300' area={'n'}>
                        Nav
                    </GridItem>
                    <GridItem pl='2' bg='green.300' area={'m'}>
                        Main
                    </GridItem>
                    <GridItem pl='2' bg='blue.300' area={'f'}>
                        Footer
                    </GridItem>
                </Grid>
            </Stack>
            <HStack
                py={12}
                px={10}
                spacing={8}
                bgGradient='linear(to-l, #A1D6DA, #C1C1D9)'
            >
                <Stack
                    w={"50%"}
                    spacing={5}
                >
                    <Heading
                        fontWeight={400}
                    >
                        Inscreva-se em nosso blog
                    </Heading>
                    <Text
                        fontWeight={500}
                    >
                        Receba todos os <Text as="span" fontWeight={600}>conteúdos totalmente grátis</Text> e faça seu negócio se destacar!
                    </Text>
                </Stack>
                <Stack
                    w={"50%"}
                    spacing={5}
                >
                    <Input placeholder='Digite seu melhor email' isRequired w="80%" bg="white" size='lg' />
                    <Button
                        as="button"
                        bgColor="#ffffff4d"
                        color={"#82735C"}
                        w={"45%"}
                        borderRadius="full"
                        fontSize={{ base: "28px", lg: "20px", xl: "20px" }}
                        fontWeight="600"
                        py={6}
                        px={4}

                    >
                        Quero me inscrever
                    </Button>
                </Stack>
            </HStack>
        </Stack>
    )
}