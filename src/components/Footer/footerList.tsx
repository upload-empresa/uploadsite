import { Stack } from "@chakra-ui/react"
import { ReactNode } from "react"

interface FooterListProps {
    children: ReactNode
}

export function FooterList({children}:FooterListProps) {
    return (
        <Stack
            as="aside"
            align="start"
            justify="center"
            w={{sm:"100%", msm:"100%", md:"100%", lg:"25%", xl:"25%"}}
            flexDir={{base:"column", sm:"column", msm:"column", md:"row", lg:"row", xl:"row"}}

        >
            {children}
        </Stack>

    )
}