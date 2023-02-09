import { Link } from "@chakra-ui/react"
import NextLink from 'next/link'
import { ReactNode } from "react"

interface LinksProps {
    link: string
    children: ReactNode
}

export function Links({ link, children }:LinksProps) {
    return(
        <NextLink href={link} passHref>
            <Link
                target={'_blank'}
                as="a"
                fontWeight={500}
                color={"#2FACFA"}
            >
                {children}
            </Link>
        </NextLink>
    )
}