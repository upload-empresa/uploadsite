import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Stack, HStack } from "@chakra-ui/react"

import { ButtonAdd, ButtonBlog } from "../Button"
import { HeadingAdminBlog } from "../Heading"

interface TableBlogProps {
    title: string
    name: string
    phone: string
    email: string
    href: string
    w: any
}

export function TableBlog({ name, phone, email, href, w }: TableBlogProps) {
    return (
        <TableContainer w={w} py={8} px={6}>
                <Stack>
                    <HStack
                        justify={"space-between"}
                    >
                        <HeadingAdminBlog />
                        <ButtonAdd text={"Novo Post"} href={"/admin/createpost"} />
                    </HStack>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th color={"#B5B7C0"} fontSize={{'2xl':"18px",xl:"16px", lg:"14px", xxs:"14px"}} fontWeight={500}>Ações</Th>
                                <Th color={"#B5B7C0"} fontSize={{'2xl':"18px",xl:"16px", lg:"14px", xxs:"14px"}} fontWeight={500}>ID</Th>
                                <Th textAlign={"start"} color={"#B5B7C0"} fontSize={{'2xl':"18px",xl:"16px", lg:"14px", xxs:"14px"}} fontWeight={500}>Título</Th>
                                <Th color={"#B5B7C0"} fontSize={{'2xl':"18px",xl:"16px", lg:"14px", xxs:"14px"}} fontWeight={500}>Data</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}><ButtonBlog href={href} /></Td>
                                <Td color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}>{name}</Td>
                                <Td textAlign={"start"} color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}>{phone}</Td>
                                <Td color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}>{email}</Td>
                            </Tr>
                            <Tr>
                                <Td color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}><ButtonBlog href={href} /></Td>
                                <Td color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}>Jorge</Td>
                                <Td textAlign={"start"} color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}>(32) 9555-0118</Td>
                                <Td color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}>jane@microsoft.com</Td>
                            </Tr>
                            <Tr>
                                <Td color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}><ButtonBlog href={href} /></Td>
                                <Td color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}>Jorge</Td>
                                <Td textAlign={"start"} color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}>(32) 9555-0118</Td>
                                <Td color={"#474749"} fontSize={{'2xl':"20px",xl:"16px", lg:"14px", xxs:"14px"}}>jane@microsoft.com</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Stack>
        </TableContainer>
    )
}


