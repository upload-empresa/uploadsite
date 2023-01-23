import { Button } from "@chakra-ui/react"
import NextLink from 'next/link'

interface ButtonProdutoProps {
    text: string
}

export function ButtonProduto({ text }:ButtonProdutoProps) {
    return (
        <NextLink href={"https://wa.me/5532984223528"} passHref target="_blank">
            <Button
                colorScheme="blackAlpha"
                fontSize="20px"
                color="white"
                w={{ base: "65%", nvl:"55%", msm:"50%", md:"25%", lg: "23%" }}
                py={6}
                borderRadius="full"
                as="button"
            >
                {text}
            </Button>
        </NextLink>

    )
}