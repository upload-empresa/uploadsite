import { HStack, Stack } from "@chakra-ui/react"
import Image from "next/image"
import { ReactNode } from "react"

interface CardLeftProps {
    urlimage: string
    altura: string
    largura: string
    description: string
    children: ReactNode
}


export function CardLeft({ urlimage, altura, largura, description, children }:CardLeftProps) {
    return (
        <HStack
            flexDir={{ base: "column", lg: "row" }}
            spacing={{ base: "0", lg: "8" }}
        >
            <Image src={urlimage} height={altura} width={largura} alt={description} />
            <Stack
                flexDir={{ base: "column", lg: "column", xl: "column" }}
            >
                {children}

            </Stack>
        </HStack>

    )
}