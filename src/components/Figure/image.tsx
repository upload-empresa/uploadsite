import { Flex } from "@chakra-ui/react"
import Image from 'next/image'

interface FigureImageProps {
    w: any
    tamw: any
    tamh: any
    altText: string
    path: string
}


export function Images({ w, tamw, tamh, altText, path }:FigureImageProps) {
    return (
        <Flex
            as="figure"
            w={w}
        >
            <Image src={path} width={tamw} height={tamh} alt={altText} />
        </Flex>

    )
}