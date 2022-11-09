import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Stack,
  Heading,
  Text,
  HStack,
  Select
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
// import SEO from 'components/SEO'

export default function HookForm() {
  const [status, setStatus] = useState('Enviar')
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const handleResponse = (status) => {
    if (status === 200) {
      reset()
      setStatus("Enviada")
      setTimeout(() => setStatus('Enviar'), 5000)
    } else {
      setStatus('Tente enviar novamente!')
      setTimeout(() => setStatus('Enviar'), 5000)
    }
  }

  const handleOnSubmit = async (values) => {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    handleResponse(res.status)
  }

  return (

    <Stack
      p={6}
      w="100%"
      flexDir={{ base: "column", msm: "column", md: "column", lg: "row", xl: "row" }}
      align={{ base: "center", msm: "center", md: "center", lg: "baseline", xl: "baseline" }}
    >
      {/* <SEO title='Contact' /> */}
      <HStack
        flexDir="column"
        align={{ base: "center", msm: "center", md: "center", lg: "baseline", xl: "baseline" }}
        w={{ base: "100%", msm: "100%", md: "100%", lg: "50%", xl: "50%" }}
        spacing={4}
      >
        <Stack
          spacing={12}
          w={{ base: "100%", msm: "100%", md: "100%", lg: "100%", xl: "100%" }}
          align={{ base: "center", msm: "center", md: "center", lg: "baseline", xl: "baseline" }}
        >
          <Stack
            spacing={4}
            id="contato"
          >
            <Heading
              fontSize={{ base: "40px", lg: "48px", xl: "48px" }}
              fontWeight={400}
              textAlign="start"
            >
              Fale com a gente!
            </Heading>
            <Text
              fontSize={{ base: "24px", lg: "32px", xl: "32px" }}
            >
              E faça sua empresa crescer.
            </Text>
          </Stack>
          <Stack
            w="80%"
            align={{ base: "center", msm: "center", md: "center", lg: "baseline", xl: "baseline" }}
          >
            <Image src="/images/contato.png" width={"250%"} height={"230%"} alt="Escadas de progresso" />
          </Stack>
        </Stack>
      </HStack>


      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <HStack
          flexDir="column"
          align="start"
          w={{ base: "100%", msm: "100%", md: "100%", lg: "100%", xl: "100%" }}
        >
          <Stack
            spacing={4}
            align={{ base: "center", msm: "center", md: "center", lg: "baseline", xl: "baseline" }}
            w={{ base: "100%", msm: "100%", md: "100%", lg: "100%", xl: "100%" }}
          >
            <HStack
              w="100%"
              spacing={{ base: 0, msm: 0, md: 4, lg: 4, xl: 4 }}
              align="stretch"
              flexDir={{ base: "column", msm: "column", md: "row", lg: "row", xl: "row" }}
            >
              <Stack
                w={{ base: "100%", msm: "100%", md: "89%", lg: "89%", xl: "89%" }}
              >
                <Text
                  as="p"
                  fontSize="20px"
                  fontWeight="500"
                >
                  Como se chama?
                </Text>
                <FormControl isInvalid={errors.name}>
                  <Input
                    id='name'
                    {...register('name', {
                      required: 'É preciso preencher seu nome',
                      minLength: { value: 3, message: 'Deve-se conter no mínimo 3 caracteres' },
                    })}
                    type="text"
                    placeholder="Nome"
                    _placeholder={{ color: "#565656" }}
                    size="md"
                    bg="#e9e8e9" />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
              <Stack
                w={{ base: "100%", msm: "100%", md: "89%", lg: "89%", xl: "89%" }}
              >
                <Text
                  as="p"
                  fontSize="20px"
                  fontWeight="500"
                >
                  Qual o seu telefone?
                </Text>
                <FormControl isInvalid={errors.telephone}>
                  <Input
                    id='telephone'
                    {...register('telephone', {
                      required: 'É preciso preencher seu telefone',
                      pattern: {
                        value: /^\d{11}$/,
                        message: 'Seu número deve conter 11 caracteres incluindo o ddd de seu estado',
                      },
                    })}
                    type="number"
                    placeholder="Telefone"
                    _placeholder={{ color: "#565656" }}
                    size="md"
                    bg="#e9e8e9" />
                  <FormErrorMessage>
                    {errors.telephone && errors.telephone.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
            </HStack>
            <HStack
              spacing={{ base: 0, msm: 0, md: 4, lg: 4, xl: 4 }}
              align="stretch"
              flexDir={{ base: "column", msm: "column", md: "row", lg: "row", xl: "row" }}
            >
              <Stack
                w={{ base: "100%", msm: "100%", md: "89%", lg: "89%", xl: "89%" }}
              >
                <Text
                  as="p"
                  fontSize="20px"
                  fontWeight="500"
                >
                  Qual o seu e-mail?
                </Text>
                <FormControl isInvalid={errors.email}>
                  <Input
                    id='email'
                    {...register('email', {
                      required: 'É necessário preencher seu email',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'O email informado não corresponde ao formato de email correto. exemplo@gmail.com',
                      },
                    })}
                    type="email"
                    placeholder="E-mail"
                    _placeholder={{ color: "#565656" }}
                    size="md"
                    bg="#e9e8e9" />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
              <Stack
                w={{ base: "100%", msm: "100%", md: "89%", lg: "89%", xl: "89%" }}
              >
                <Text
                  as="p"
                  fontSize="20px"
                  fontWeight="500"
                >
                  Qual o seu cargo?
                </Text>
                <FormControl isInvalid={errors.cargo}>
                  <Input
                    id='cargo'
                    {...register('cargo', {
                      required: 'É necessário preencher seu cargo',
                      minLength: {
                        value: 3,
                        message: 'O valor mínimo deve ser 3',
                      },
                    })}
                    type="text"
                    placeholder="Cargo"
                    _placeholder={{ color: "#565656" }}
                    size="md"
                    bg="#e9e8e9" />
                  <FormErrorMessage>
                    {errors.cargo && errors.cargo.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
            </HStack>
            <Stack
              w={{ base: "100%", msm: "100%", md: "100%", lg: "100%", xl: "100%" }}

            >
              <Text
                as="p"
                fontSize="20px"
                fontWeight="500"
              >
                O que você deseja?
              </Text>
              <FormControl isInvalid={errors.opcao}>
                <Select
                  w="100%"
                  id='opcao'
                  {...register('opcao', {
                    required: 'É necessário preencher a opção',
                  })}
                  placeholder='Selecione a opção'
                  color="#565656"
                  size='md'
                  bg="#e9e8e9">
                  <option value='site'>Site</option>
                  <option value='loja virtual'>Loja Virtual</option>
                  <option value='sistema'>Sistema</option>
                </Select>
                <FormErrorMessage>
                  {errors.opcao && errors.opcao.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack
              w="100%"
              align="center"
            >
              <Button
                disabled={isSubmitting}
                type='submit'
                fontSize="28px"
                fontWeight="500"
                background='#82735c'
                color="white"
                py={8}
                px={4}
                w={{ base: "70%", msm: "70%", md: "40%", lg: "40%", xl: "40%" }}
                transition="ease-in 0.2s all"
                transitionDelay="50ms"
                borderRadius="full"
                _hover={{
                  bg: "#2facfa"
                }}
              >
                {status}
              </Button>
            </Stack>
          </Stack>
        </HStack>
      </form>
    </Stack>
  )










}