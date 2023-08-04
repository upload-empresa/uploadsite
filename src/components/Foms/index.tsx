import { FormControl, FormLabel, Input, Button, Stack } from "@chakra-ui/react"
import { Controller } from "react-hook-form"

interface FormsLoginProps {
    submitHandler: any
    handleSubmit: any
    control: any
    errors: any
}

export function FormsLogin({ submitHandler, control, handleSubmit, errors }: FormsLoginProps) {
    return (
        //@ts-ignore
        <>
            <form onSubmit={handleSubmit(submitHandler)}>

                <Stack
                    px={{ md: 8, nvl: 6, min: 4 }}
                    py={{ md: 6, nvl: 4, min: 2 }}
                    spacing={6}
                    align={"center"}
                    justify={"center"}
                >
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            }}
                            render={({ field }) => (
                                <><Input
                                    as="input"
                                    placeholder="Digite o email administrativo"
                                    _placeholder={{
                                        color: "#E0E0E0"
                                    }}
                                    id="email"
                                    //@ts-ignore
                                    inputProps={{ type: 'email' }}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email
                                        ? errors.email.type === 'pattern'
                                            ? 'Email is not valid'
                                            : 'Email is required'
                                        : ''}
                                    {...field}
                                ></Input></>
                            )}
                        ></Controller>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Senha</FormLabel>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                                minLength: 6,
                            }}
                            render={({ field }) => (
                                <Input
                                    as="input"
                                    placeholder="Digite a senha administrativa"
                                    _placeholder={{
                                        color: "#E0E0E0"
                                    }}
                                    id="password"
                                    //@ts-ignore
                                    inputProps={{ type: 'password' }}
                                    type="password"
                                    error={Boolean(errors.password)}
                                    helperText={errors.password
                                        ? errors.password.type === 'minLength'
                                            ? 'Password length is more than 5'
                                            : 'Password is required'
                                        : ''}
                                    {...field}
                                ></Input>
                            )}
                        ></Controller>
                    </FormControl>
                    <Button
                        bg='#2FACFA'
                        color="white"
                        type="submit"
                        px={{ md: 10, nvl: 8, min: 6 }}
                        py={{ md: 6, nvl: 4, min: 3 }}
                        fontSize="20px"
                        fontWeight="400"
                        w={{ md: "70%", nvl: "65%", min: "50%" }}
                        _hover={{
                            bg: '#2994d7'
                        }}
                    >
                        Entrar
                    </Button>
                </Stack>
            </form>
        </>
    )
}