import { Stack } from "@chakra-ui/react"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useSnackbar } from "notistack"
import { useContext } from "react"
import { MdHome, MdLogout } from "react-icons/md"
import { Store } from "../../utils/Store"

import { SideSection } from "./sidesection"

interface SidebarProps {
    w: any
}

export function Sidebar({ w }: SidebarProps) {

    const router = useRouter()
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
    }

    return (
        <Stack w={w} display={{ lg: "flex", xxs: "none" }} py={12} bg="#1C85B1" spacing={3} pr={0}>
            <SideSection href="/" text="Posts" icone={MdHome} />
            <SideSection href="/login" text="Logout" icone={MdLogout} onClick={logoutClickHandler} />
        </Stack>
    )
}