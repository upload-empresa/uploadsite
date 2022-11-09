import { Stack, Flex, Heading, Input, Button, Link, Checkbox } from "@chakra-ui/react"

import NextLink from 'next/link'
import  Image from 'next/image'
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export default function Cadastro() {
    return (
        <>
            <Navbar />
            <Stack
                align='center'
                justify='center'
                p={6}
                spacing={4}
            >

                <Flex
                    as='form'
                    w='100%'
                    maxWidth='360px'
                    bg='white'
                    boxShadow='2px 4px 12px #00000045'
                    p='8'
                    align="center"
                    borderRadius={8}
                    flexDirection='column'
                >
                    <Image src="/images/UP.png" alt="Logo da Upload" width="60%" />
                    <Heading pb='8'>
                        Cadastro
                    </Heading>

                    <Stack spacing='4'>

                        <Input type='text' bg="blackAlpha.100" name='nome' w="100%" placeholder='Nome' />

                        <Input type='text' bg="blackAlpha.100" name='nome' w="100%" placeholder='Sobrenome' />

                        <Input type='email' bg="blackAlpha.100" name='email' w="100%" placeholder='E-mail' />

                        <Input type='password' bg="blackAlpha.100" name='password' w="100%" placeholder='Senha' />

                        <Input type='password' bg="blackAlpha.100" name='password' w="100%" placeholder='Confirma Senha' />

                    </Stack>
                    <Stack
                        w="79%"
                        mt="6%"
                    >
                        <Checkbox defaultChecked>Aceito os
                            <NextLink href='#' passHref>
                                <Link ml="2%" color="blue.500" fontWeight="600" fontSize='16px'>
                                    termos de uso
                                </Link>
                            </NextLink>
                        </Checkbox>
                    </Stack>
                    <Button
                        type='submit'
                        mt='6'
                        size='lg'
                        w="75%"
                        bg='#39abf0'
                        color='alphas.700'
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        _hover={{ opacity: 0.8 }}
                        borderRadius="2rem"
                    >Criar
                    </Button>


                </Flex>

            </Stack>
            <Footer />
        </>

    )
}