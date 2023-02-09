import { Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface TextAuthorProps {
    children: ReactNode
}

export function TextAuthor() {
    return (
        <Text
            as="p"
            fontSize={"14px"}
            fontWeight={500}
            lineHeight={"22px"}
            color={"#171923"}
        >
            Gabriel Botelho
        </Text>
    )
}