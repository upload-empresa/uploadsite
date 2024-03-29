import { CircularProgress, FormControl, HStack, Stack } from "@chakra-ui/react"

import { Sidebar } from "../Sidebar"
import { Forms } from "../Forms"
import { ButtonSave } from "../Button"


interface MainPostBlogProps {
    uploadHandler: any
    submitHandler: any
    handlerSubmit: any
    errors?: any
    control: any
}

// 
export function MainBlog() {

    return (
        <HStack
            align={"stretch"}
            w="100%"
        >
            <Sidebar w={"15%"} />
        </HStack>
    )
}

export function MainPostBlog({ uploadHandler, submitHandler, handlerSubmit, errors, control }: MainPostBlogProps) {
    return (
        <form onSubmit={handlerSubmit(submitHandler)}>

            <HStack
                align={"stretch"}
            >
                <Sidebar w={"15%"} />
                <Stack
                    w={"85%"}
                    py={8}
                    px={6}
                    spacing={5}
                >
                    <HStack spacing={6} flexDir={"row"}>
                        <Forms label={"Título"} type={"text"} placeholder={"Digite o título do post"}
                            mb={"0"} errors={Boolean(errors.title)} controlForm={control} nameForm={"title"} />

                        <Forms label={"Data do post"} type={"date"} placeholder={"Digite a data do post"} errors={Boolean(errors.data)} controlForm={control} nameForm={"data"} />
                    </HStack>
                    <HStack spacing={6} flexDir={"row"}>
                        <Forms label={"Url do post"} type={"text"} placeholder={"Digite a url do post. Ex: vantagens-de-ter-um-site"} mb={"0"} errors={Boolean(errors.slug)} controlForm={control} nameForm={"slug"} />
                        <Forms label={"Imagem principal do post"} type={"image"} placeholder={"Arraste a imagem"} errors={Boolean(errors.image)} controlForm={control} nameForm={"image"} />
                        <FormControl>
                            <input type="file" onChange={uploadHandler} />
                        </FormControl>
                    </HStack>
                    <HStack spacing={6} flexDir={"row"}>
                        <Forms label={"Resumo do post"} type={"textarea"} placeholder={"Digite o resumo do post"} mb={"0"} errors={Boolean(errors.resumo)} controlForm={control} nameForm={"resumo"} />
                        <Forms label={"Corpo de texto do post"} type={"textarea"} placeholder={"Digite o corpo de texto do post"} controlForm={control} nameForm={"body"} />
                    </HStack>
                    <ButtonSave align="end" type="submit" />

                </Stack>
            </HStack>
        </form>
    )
}