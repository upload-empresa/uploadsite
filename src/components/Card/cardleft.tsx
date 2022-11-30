import { HStack, Stack } from "@chakra-ui/react"
import Image from "next/image"
import { ReactNode } from "react"
import { Imagens } from "../SEO/images"

interface CardLeftProps {
    urlimage: string
    altura: string
    largura: string
    description: string
    children: ReactNode
    tam: any
}


export function CardLeft({ urlimage, altura, largura, description, children, tam }:CardLeftProps) {
    return (
        <HStack
            flexDir={{ base: "column", lg: "row" }}
            spacing={{ base: "0", lg: "8" }}
        >
            <Imagens tam={tam} path={urlimage} description={description} tamw={largura} tamh={altura} />
            <Stack
                flexDir={{ base: "column", lg: "column", xl: "column" }}
            >
                {children}

            </Stack>
        </HStack>

    )
}