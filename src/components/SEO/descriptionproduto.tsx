import { Text } from "@chakra-ui/react"

interface DescriptionProdutoProps {
    text: string
}

export function DescriptionProduto({ text }:DescriptionProdutoProps) {
    return (
        <Text
            fontSize="20px"
            color="white"
            as="p"
            textAlign={{base:"center", md:"center", lg:"start", xl:"start", iba:"start"}}
            maxW={{ base: "100%", md:"70%", lg: "55%" }}
        >
            {text}
        </Text>

    )
}