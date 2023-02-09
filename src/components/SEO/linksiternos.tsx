import { Link } from "@chakra-ui/react"
import NextLink from  'next/link'
import { ReactNode } from "react"

interface LinksInternosProps {
    link: string
    children: ReactNode
}

export function LinksInternos({ link, children }:LinksInternosProps) {
    return(
        <NextLink href={link} passHref>
            <Link
                as="a"
                fontWeight={500}
                color={"#2FACFA"}
            >
                {children}
            </Link>
        </NextLink>
    )
}