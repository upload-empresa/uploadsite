import { Tr, Tbody, Td, } from "@chakra-ui/react"
import { ButtonBlog } from "../Button"

interface TableBlogProps {
    data: any
    funcaodelete: any
}

export function TableBlog({ data, funcaodelete }: TableBlogProps) {

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


