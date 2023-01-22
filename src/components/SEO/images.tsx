import { border, Stack } from "@chakra-ui/react"
import Image from "next/image"

interface ImagensProps {
    tam: any
    path: string
    description: string
    tamw: string
    tamh: string
    borderRadius?: string
}

export function Imagens({ tam, path, description, tamw, tamh, borderRadius }:ImagensProps) {
    return(
        <Stack
            as="picture"
            w={tam}
            borderRadius={borderRadius}
        >
            <Image src={path} alt={description} width={tamw} height={tamh}/>
        </Stack>
    )
}