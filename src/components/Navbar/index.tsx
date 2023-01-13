/* eslint-disable */
import { Flex, HStack, IconButton, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { MdMenu, MdOutlineClose } from "react-icons/md"

import { FigureImage } from '../Figure'
import { Navigation } from './navigation'


export function Navbar() {

    const [display, changeDisplay] = useState('none')
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

            </HStack>
            <IconButton
                aria-label={'Open Menu'}
                size="lg"
                bg="transparent"
                icon={<MdMenu />}
                display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
                onClick={() => changeDisplay('flex')}
            />
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