import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Stack } from "@chakra-ui/react"
import React from "react"
import { MdMenu } from "react-icons/md"

import { Navigation } from "./navigation"

export function DrawerUp() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button
                //@ts-ignore
                ref={btnRef}
                colorScheme='teal'
                onClick={onOpen}
                bg="white"
                color={"black"}
                size={"lg"}
                display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
            >
                <MdMenu />

            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size={{ base: "xs" }}
                //@ts-ignore
                initialFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent

                >
                    <DrawerCloseButton />

                    <DrawerBody
                        mt={"10%"}
                    >
                        <Stack
                            align="center"
                            spacing={0}
                        >
                            <Navigation name="Home" link='/' />
                            <Navigation name="Produtos" link='/produtos' />
                            <Navigation name="Contato" link='/#contato' />
                            <Navigation name="Blog" link='/blog' />
                            <Navigation name="Login" link='/login' />

                        </Stack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}