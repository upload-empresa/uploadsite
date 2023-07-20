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
}

export function TableBlog({ w, onClickCreate, onClickDelete, onClickEdit, posts, deletehandler }: TableBlogProps) {

    return (
        <TableContainer w={w} py={8} px={6}>
            <Stack>
                <HStack
                    justify={"space-between"}
                >
                    <HeadingAdminBlog />
                    <ButtonAdd text={"Novo Post"} onClick={onClickCreate} />
                </HStack>
                <Table>
                    <Thead>
                        <Tr>
                            <Th color={"#B5B7C0"} fontSize={{ '2xl': "18px", xl: "16px", lg: "14px", xxs: "14px" }} fontWeight={500}>Ações</Th>
                            <Th color={"#B5B7C0"} fontSize={{ '2xl': "18px", xl: "16px", lg: "14px", xxs: "14px" }} fontWeight={500}>ID</Th>
                            <Th textAlign={"start"} color={"#B5B7C0"} fontSize={{ '2xl': "18px", xl: "16px", lg: "14px", xxs: "14px" }} fontWeight={500}>Título</Th>
                            <Th color={"#B5B7C0"} fontSize={{ '2xl': "18px", xl: "16px", lg: "14px", xxs: "14px" }} fontWeight={500}>Data</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {posts.map((post: any) => (
                            <Tr key={post._id}>
                                <Td color={"#474749"} fontSize={{ '2xl': "20px", xl: "16px", lg: "14px", xxs: "14px" }}>
                                    <ButtonBlog
                                        post={post._id}
                                        hrefEdit={`/admin/post/${post._id}`}
                                        onClickDelete={deletehandler}
                                        onClickEdit={onClickEdit} />
                                </Td>
                                <Td color={"#474749"} fontSize={{ '2xl': "20px", xl: "16px", lg: "14px", xxs: "14px" }}>{post._id}</Td>
                                <Td textAlign={"start"} color={"#474749"} fontSize={{ '2xl': "20px", xl: "16px", lg: "14px", xxs: "14px" }}>{post.title}</Td>
                                <Td color={"#474749"} fontSize={{ '2xl': "20px", xl: "16px", lg: "14px", xxs: "14px" }}>{post.data}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Stack>
        </TableContainer>
    )
}


