/* eslint-disable */
import { Flex, HStack } from '@chakra-ui/react'
import { useState } from 'react'

import { FigureImage } from '../Figure'
import { DrawerUp } from './drawer'
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

            </HStack>
            <DrawerUp />
            <Flex as="section" display={{ base: 'none', lg: "flex", xl: "flex" }} />
        </HStack>
    )
}