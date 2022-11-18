import { Stack } from "@chakra-ui/react"

import { DescriptionProduto } from "./descriptionproduto"
import { ButtonProduto } from "./buttonproduto"

interface SectionDescriptionProps {
    text1: string
    text2: string
}

export function SectionDescription({ text1, text2 }: SectionDescriptionProps) {
    return (
        <Stack
            as="article"
            flexDir="column"
            spacing={6}
            align={{ base: "center", lg: "start", xl: "start" }}
        >
            <DescriptionProduto text={text1} />
            <ButtonProduto text={text2} />
        </Stack>

    )
}