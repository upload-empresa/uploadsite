import { Link, Text } from "@chakra-ui/react"
import NextLink from 'next/link'

interface NavigationProps {
    link: string
    name: string
    onClick?: any
}

export function Navigation({ link, name, onClick }: NavigationProps) {
    return (
        <Text
            as="ul"
            fontSize="24px"
            color="#82735C"
            transition="ease-in 100ms"
            _hover={{
                transform: 'scale(1.10)'
            }}

        >
            <Text
                as="li"
                listStyleType={"none"}
            >
                <NextLink href={link} passHref>
                    <Link
                        as="a"
                        onClick={onClick}
                        _hover={{
                            textDecoration: "none",
                        }}
                    >
                        {name}
                    </Link>
                </NextLink>
            </Text>
        </Text>

    )
}