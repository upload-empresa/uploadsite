import { Button, HStack, IconButton, Stack } from "@chakra-ui/react"
import { MdAdd, MdDelete, MdEdit } from "react-icons/md"

import { Links } from "../Links"

interface ButtonPacientesProps {
    hrefEdit: any
    onClickDelete: any
    onClickEdit: any
    post: any
}

export function ButtonBlog({ post, hrefEdit, onClickDelete, onClickEdit }: ButtonPacientesProps) {
    return (
        <HStack>

            <IconButton
                type="submit"
                colorScheme='red'
                aria-label='Call Segun'
                size={{ '2xl': "md", lg: 'sm', xxs: "sm" }}
                fontSize={{ '2xl': "24px", xl: "18px", xxs: "16px" }}
                icon={<MdDelete />}
                onClick={onClickDelete}
            />

            <Links href={hrefEdit}>
                <IconButton
                    type="submit"
                    colorScheme='blue'
                    aria-label='Call Segun'
                    size={{ '2xl': "md", lg: 'sm', xxs: "sm" }}
                    fontSize={{ '2xl': "24px", xl: "18px", xxs: "16px" }}
                    icon={<MdEdit />}
                // onClick={onClickEdit}
                />
            </Links>
        </HStack>
    )
}

interface ButtonAddProps {
    text: string
    href: string
    onClick?: any
    mt?: any
}

export function ButtonAdd({ text, href, onClick, mt }: ButtonAddProps) {
    return (
        <Links href={href} >
            <Button
                leftIcon={<MdAdd />}
                bg={"#0BB7AF"}
                color={"white"}
                mt={mt}
                size={{ '2xl': 'lg', lg: "sm", xxs: "sm" }}
                fontSize={{ '2xl': "20px" }}
                onClick={onClick}
                fontWeight={500}
            >
                {text}
            </Button>
        </Links>
    )
}

interface ButtonSaveProps {
    align?: string
    type: any
}

export function ButtonSave({ align, type }: ButtonSaveProps) {
    return (
        <Stack
            align={align}
            w="100%"
        >

            <Button
                type={type}
                colorScheme={'teal'}
                w={{ '2xl': "8%", xl: "15%", lg: "15%", md: "25%", sm: "40%", xxs: "65%" }}
                size={"sm"}
            >
                Salvar
            </Button>
        </Stack>

    )
}

