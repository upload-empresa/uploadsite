import { HStack, Stack, Heading, Input, Button, Text } from "@chakra-ui/react"

export function Newsletter() {
    return (
        <HStack
            py={{ xl: 12, lg: 12, md: 6 }}
            px={{ xl: 10, lg: 10, md: 8 }}
            spacing={8}
            display={{ md: "flex", xl: "flex", lg: "flex", msm:"none", sm:"none", min:"none" }}
            bgGradient='linear(to-l, #A1D6DA, #C1C1D9)'
        >
            <Stack
                w={"50%"}
                spacing={5}
            >
                <Heading
                    fontWeight={400}
                    fontSize={{ base: "36px", md: "28px" }}
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
                <Input placeholder='Digite seu melhor email' isRequired w="80%" bg="white" size={{ xl: 'lg', lg: 'lg', md: 'md' }} />
                <Button
                    as="button"
                    bgColor="#ffffff4d"
                    color={"#82735C"}
                    w={{ xl: "45%", lg: "45%", md: "65%" }}
                    borderRadius="full"
                    fontSize={{ md: "16px", lg: "20px", xl: "20px" }}
                    fontWeight="600"
                    py={6}
                    px={4}

                >
                    Quero me inscrever
                </Button>
            </Stack>
        </HStack>

    )
}

export function NewsletterV() {
    return (
        <Stack
            py={{ msm:6, sm:6, min:6 }}
            px={{ msm:8, sm:8, min:8 }}
            spacing={8}
            align={"center"}
            display={{ msm: "flex", sm: "flex", min: "flex", md:"none", lg:"none", xl:"none" }}
            bgGradient='linear(to-l, #A1D6DA, #C1C1D9)'
        >
            <Stack
                spacing={5}
            >
                <Heading
                    fontWeight={400}
                    fontSize={{ base: "36px", md: "28px" }}
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
                spacing={5}
            >
                <Input placeholder='Digite seu melhor email' isRequired w="100%" bg="white" size={{ msm:"md", sm:"md", min:"md" }} />
                <Button
                    as="button"
                    bgColor="#ffffff4d"
                    color={"#82735C"}
                    w={{ xl: "45%", lg: "45%", md: "65%" }}
                    borderRadius="full"
                    fontSize={{ msm:"20px", sm:"20px", min:"16px" }}
                    fontWeight="500"
                    py={6}
                    px={4}

                >
                    Quero me inscrever
                </Button>
            </Stack>
        </Stack>


    )
}