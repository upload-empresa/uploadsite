import { Heading } from "@chakra-ui/react"

interface HeaderProdutoProps {
    text: string
}

export function HeaderProduto({ text }:HeaderProdutoProps) {
    return (
        <Heading
            fontSize={{ base: "24px", sm:"32px", nvl:"32px", msm: "32px", md: "32px", lg: "40px", xl: "40px" }}
            color="white"
            fontWeight="500"
            as="h2"
        >
           {text}
        </Heading>

    )
}