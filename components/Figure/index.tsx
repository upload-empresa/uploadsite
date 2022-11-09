import { Flex } from "@chakra-ui/react"
import Image from 'next/image'


export function FigureImage() {
    return (
        <Flex
            as="figure"
            w={{base:"40%", msm:"30%", md:"20%", lg:"12%", xl:"12%"}}
        >
            <Image src="/images/upload.png" width={"357px"} height={"108px"} alt="Logo da Upload" />
        </Flex>

    )
}