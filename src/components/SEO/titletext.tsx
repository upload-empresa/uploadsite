import { HStack } from "@chakra-ui/react"

import { HeaderProduto } from "./headerproduto"
import { TextProduto } from "./textproduto"

interface SectionTitlesProps {
    text1: string
    text2: string
}

export function SectionTitles({ text1, text2 }:SectionTitlesProps) {
    return (
        <HStack
            as="section"
            spacing={{ base: "4", lg: "4" }}
            justify={{ base: "center", lg: "start", xl: "start" }}

        >
            <TextProduto text={text1} />
            <HeaderProduto text={text2} />
        </HStack>

    )
}