import { Button } from "@chakra-ui/react"
import NextLink from 'next/link'

interface ButtonsProps {
    text: string
    tam: string
    bgcolor: string
    bgcolorhover: string
    color?: string
    colorhover?: string
    rota: string
}

export function Buttons({ text, tam, bgcolor, bgcolorhover, color, colorhover, rota }:ButtonsProps) {
    return (
        <NextLink href={rota} passHref>
            <Button
                as="button"
                w={tam}
                fontSize={{ base: "28px", lg: "32px", xl: "32px" }}
                fontWeight="500"
                background={bgcolor}
                py={8}
                color={color}
                transition="ease-in 0.2s all"
                transitionDelay="50ms"
                px={4}
                borderRadius="full"
                _hover={{
                    bg: {bgcolorhover},
                    color: {colorhover}
                }}
            >
                {text}
            </Button>
        </NextLink>

    )
}