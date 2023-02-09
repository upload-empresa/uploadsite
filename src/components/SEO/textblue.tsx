import { Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface TextBlueProps {
    children: ReactNode
}

export function TextBlue({ children }:TextBlueProps) {
    return(
        <Text
            as="span" 
            color="#2facfa"
        >
            {children}
        </Text>
    )
}