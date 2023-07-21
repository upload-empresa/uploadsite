import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Stack, HStack } from "@chakra-ui/react"
import { PostAddSharp } from "@material-ui/icons"

import { ButtonAdd, ButtonBlog } from "../Button"
import { HeadingAdminBlog } from "../Heading"


interface TableBlogProps {
    title: string
    w: any
    onClickCreate: any
    onClickDelete: any
    onClickEdit: any
    posts: any
    deletehandler: any
    data: any
    funcaodelete: any
}

export function TableBlog({ w, onClickCreate, onClickDelete, onClickEdit, posts, deletehandler, data, funcaodelete }: TableBlogProps) {

    return (
        <Tbody>
            <Tr key={data._id}>
                <Td
                    color={'#474749'}
                    fontSize={{
                        '2xl': '20px',
                        xl: '16px',
                        lg: '14px',
                        xxs: '14px',
                    }}
                >
                    <ButtonBlog
                        post={data._id}
                        hrefEdit={`/admin/post/${data._id}`}
                        onClickDelete={funcaodelete}
                        onClickEdit={undefined} />
                </Td>
                <Td
                    color={'#474749'}
                    fontSize={{
                        '2xl': '20px',
                        xl: '16px',
                        lg: '14px',
                        xxs: '14px',
                    }}
                >
                    {data._id}
                </Td>
                <Td
                    textAlign={'start'}
                    color={'#474749'}
                    fontSize={{
                        '2xl': '20px',
                        xl: '16px',
                        lg: '14px',
                        xxs: '14px',
                    }}
                >
                    {data.title}
                </Td>
                <Td
                    color={'#474749'}
                    fontSize={{
                        '2xl': '20px',
                        xl: '16px',
                        lg: '14px',
                        xxs: '14px',
                    }}
                >
                    {data.data}
                </Td>
            </Tr>
        </Tbody>
    )
}


