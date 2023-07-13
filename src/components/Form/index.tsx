import { Stack, FormLabel, Input } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Controller } from "react-hook-form"


interface FormLoginProps {
    children?: ReactNode
    control: any
    erroremail?: any
    errorsenha?: any
    helper: any
    enviar: string
    wForm: string
}


export function FormLogin({ children, control, erroremail, errorsenha, helper, enviar, wForm }: FormLoginProps) {

    return (
        <Stack
            w={wForm}
            spacing={6}
        >
            {children}
            <Stack
                spacing={1}
            >
                <FormLabel
                    color="#828282"
                    fontWeight={600}
                >
                    Email
                </FormLabel>
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
                            placeholder="Digite seu email"
                            _placeholder={{
                                color: "#E0E0E0"
                            }}
                            id="email"
                            //@ts-ignore
                            inputProps={{ type: 'email' }}
                            error={erroremail}
                            helperText={helper.email
                                ? helper.email.type === 'pattern'
                                    ? 'Email is not valid'
                                    : 'Email is required'
                                : ''}
                            {...field}
                        ></Input></>
                    )}
                ></Controller>

            </Stack>
            <Stack
                spacing={1}
            >
                <FormLabel
                    color="#828282"
                    fontWeight={600}
                >
                    Senha</FormLabel>
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
                            placeholder="Digite sua senha"
                            _placeholder={{
                                color: "#E0E0E0"
                            }}
                            id="password"
                            //@ts-ignore
                            inputProps={{ type: 'password' }}
                            error={errorsenha}
                            helperText={helper.password
                                ? helper.password.type === 'minLength'
                                    ? 'Password length is more than 5'
                                    : 'Password is required'
                                : ''}
                            {...field}
                        ></Input>
                    )}
                ></Controller>
            </Stack>
            <button type="submit">Enviar</button>
        </Stack>
    )
}