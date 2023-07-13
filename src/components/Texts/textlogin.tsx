import { Text } from "@chakra-ui/react"

interface TextLoginProps {
    text: string
    span: string
}

export function TextLogin({ text, span }: TextLoginProps) {
    return (
        <Text
            as="p"
            textAlign={"center"}
            color={"#828282"}
            fontWeight={400}
        >
            {text}
            <Text
                as="span"
                color={"#9F3005"}
                fontWeight={600}
            >
                {span}
            </Text>
        </Text>

    )
}