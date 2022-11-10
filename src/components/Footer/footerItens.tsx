import { Link, Text } from "@chakra-ui/react"

import NextLink from 'next/link'

interface FooterItensProps {
    footeritem: string
    caminho: string
}

export function FooterItens({ footeritem, caminho }: FooterItensProps) {
    return (
        <NextLink href={caminho} passHref>
            <Link
                _hover={{
                    textDecoration: "none",
                }}            >
                <Text
                    as="li"
                    fontSize="16px"
                    color="white"
                    transition="ease-in 100ms"
                    _hover={{
                        transform: 'scale(1.10)'
                    }}

                >
                    {footeritem}
                </Text>
            </Link>
        </NextLink>
    )
}