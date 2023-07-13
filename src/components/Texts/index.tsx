import { Text } from "@chakra-ui/react"

interface TextsProps {
    text: string
    width: any
    mt?: string
}

export function Texts({ text, width, mt }:TextsProps) {
    return(
        <Text
        as="p"
        fontSize={{nvl:"20px", min:"16px"}}
        fontWeight={600}
        color="#818181"
        lineHeight={"150%"}
        letterSpacing="-0.03em"
        w={width}
        mt={mt}
      >
        {text}
      </Text>

    )
}