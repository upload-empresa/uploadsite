import { Text } from "@chakra-ui/react"

interface TextProdutoProps {
    text: string
}

export function TextProduto({ text }:TextProdutoProps) {
    return (
        <Text
            fontSize={{ base: "52px", msm: "64px", md: "64px", lg: "72px", xl: "72px" }}
            color="white"
            opacity="0.4"
            fontWeight="500"
            as="p"
        >
            {text}
        </Text>

    )
}