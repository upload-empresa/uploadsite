import { FormControl, FormLabel, Input, Button, Stack } from "@chakra-ui/react"

export function FormsLogin() {
    return (
        <Stack
            px={{md:8, nvl:6, min:4}}
            py={{md:6, nvl:4, min:2}}
            spacing={6}
            align={"center"}
            justify={"center"}
        >
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder="Digite o email administrativo" />
            </FormControl>
            <FormControl>
                <FormLabel>Senha</FormLabel>
                <Input type='password' placeholder="Digite a senha administrativa" />
            </FormControl>
            <Button
                bg='#2FACFA'
                color="white"
                px={{md:10, nvl:8, min:6}}
                py={{md:6, nvl:4, min:3}}
                fontSize="20px"
                fontWeight="400"
                w={{md:"70%", nvl:"65%", min:"50%"}}
                _hover={{ 
                    bg: '#2994d7'
                }}
            >
                Entrar
            </Button>
        </Stack>
    )
}