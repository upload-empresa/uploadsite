import { HStack, IconButton, Icon, Text } from "@chakra-ui/react"

import { Links } from "../Links"

interface SideSectionProps {
    text: string
    href: string
    icone: any
}


export function SideSection({ text, href, icone }: SideSectionProps) {
    return (
        <Links href={href}>
            <HStack
                pl={4}
                py={{lg:"3", xxs:"2"}}
                w="100%"
                spacing={{'2xl':4, lg:0}}
                cursor="pointer"
                _hover={{
                    bg:"#19749A"
                }}
            >
                <IconButton
                    icon={<Icon justify="end" as={icone} />}
                    fontSize={"22px"}
                    display="flex"
                    alignItems="center"
                    justifyContent={"start"}
                    variant="unstyled"
                    aria-label='Conta do usuário'
                    color="white"
                    cursor="pointer"
                    zIndex={2}

                >
                </IconButton>
                <Text color="white" w="70%" cursor="pointer" fontSize={"20px"} fontWeight="medium">{text}</Text>
            </HStack>
        </Links>
    )
}