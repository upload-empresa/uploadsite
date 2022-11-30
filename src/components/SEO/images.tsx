import { Stack } from "@chakra-ui/react"
import Image from "next/image"

interface ImagensProps {
    tam: any
    path: string
    description: string
    tamw: string
    tamh: string
}

export function Imagens({ tam, path, description, tamw, tamh }:ImagensProps) {
    return(
        <Stack
            as="picture"
            w={tam}
        >
            <Image src={path} alt={description} width={tamw} height={tamh}/>
        </Stack>
    )
}