/* eslint-disable */
import { Flex, HStack, IconButton, Stack } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { Store } from '../../utils/Store'
import { useSnackbar } from "notistack";

import { FigureImage } from '../Figure'
import { DrawerUp } from './drawer'
import { Navigation } from './navigation'


export function Navbar() {

    const router = useRouter()
    const [display, changeDisplay] = useState('none');
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;

    const { enqueueSnackbar } = useSnackbar();

    const logoutClickHandler = () => {
        if (!window.confirm("Tem certeza que deseja sair?")) {
            return;
        }
        enqueueSnackbar("Usuário deslogado com sucesso!", { variant: "success" });
        dispatch({ type: 'USER_LOGOUT' })
        Cookies.remove('userInfo')
        router.push('/')
    };

    return (
        <HStack
            as="header"
            bg="#fff"
            align="center"
            justify="space-between"
            px={4}
            py={6}
            boxShadow='0px 15px 20px #0000001a'
            position="sticky"
            top="0"
            spacing={0}
            zIndex='1000'
        >
            <FigureImage />
            <HStack
                as="nav"
                spacing={4}
                display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
            >

                <Navigation name="Home" link='/' />

                <Navigation name="Produtos" link='/produtos' />

                <Navigation name="Contato" link='/#contato' />

                <Navigation name="Blog" link='/blog' />

                {userInfo ? (
                    <>
                        {userInfo.isAdmin && (
                            <>

                                <Navigation name="Área Adm" link="/admin" />
                                <Navigation name="Logout" link='' onClick={logoutClickHandler} />
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <Navigation name="Login" link='/login' />
                    </>
                )}

            </HStack>
            <DrawerUp />
            <Flex as="section" display={{ base: 'none', lg: "flex", xl: "flex" }} />
            <Stack
                w="100vw"
                h="100vh"
                bg="gray.50"
                zIndex={20}
                position="fixed"
                top="0"
                left="0%"
                overflowY="auto"
                display={display}
                spacing={0}

            >

                <Stack
                    align="end"
                    spacing={0}
                >
                    <IconButton
                        aria-label='Close Menu'
                        mt={2}
                        mr={2}
                        bg="transparent"
                        size="lg"
                        icon={<MdOutlineClose />}
                        onClick={() => changeDisplay('none')}

                    />

                </Stack>
                <Stack
                    align="center"
                    spacing={0}
                >
                    <Navigation name="Home" link='/' />
                    <Navigation name="Produtos" link='/produtos' />
                    <Navigation name="Contato" link='/#contato' />
                    <Navigation name="Blog" link='/blog' />
                </Stack>
            </Stack>
        </HStack>
    )
}