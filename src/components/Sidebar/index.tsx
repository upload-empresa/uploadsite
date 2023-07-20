import { Stack } from "@chakra-ui/react"
import { MdHome, MdLogout } from "react-icons/md"

import { SideSection } from "./sidesection"

interface SidebarProps {
    w: any
}

export function Sidebar({ w }:SidebarProps) {
    return (
        <Stack w={w} display={{ lg: "flex", xxs: "none" }} py={12} bg="#1C85B1" spacing={3} pr={0}>
            <SideSection href="/" text="Posts" icone={MdHome} />
            <SideSection href="/agenda" text="Logout" icone={MdLogout} />
        </Stack>
    )
}