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
            maxW={{ base: "100%", lg: "55%" }}
        >
            {text}
        </Text>

    )
}