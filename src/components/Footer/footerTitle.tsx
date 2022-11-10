import { Text } from "@chakra-ui/react"

interface FooterTitleProps {
    footertitle: string
}

export function FooterTitle({footertitle}:FooterTitleProps) {
    return(
        <Text
        as="ul"
        fontSize="24px"
        color="white"
        fontWeight='500'
    >
        {footertitle}
    </Text>

    )
}