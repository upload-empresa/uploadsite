import { Link } from "@chakra-ui/react"
import NextLink from 'next/link'
import { ReactNode } from 'react'

interface LinksProps {
    href: string
    children: ReactNode
}

export function Links({ href, children }: LinksProps) {
    return (
        <Link
            as={NextLink}
            href={href}
            _hover={{
                textDecoration: 'none'
            }}
        >
            {children}
        </Link>
    )
}