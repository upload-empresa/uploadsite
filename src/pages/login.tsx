import { Stack } from "@chakra-ui/react"
import { Store } from '../utils/Store';
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { CardLogin } from "../components/Card"
import { getError } from "../utils/error";

export default function Login() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const router = useRouter();
    const { redirect } = router.query; // login?redirect=/shipping
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    useEffect(() => {
        if (userInfo) {
            enqueueSnackbar("O usuário já está logado!", { variant: 'success' } );
            router.push('/');
        }
    }, []);


    //@ts-ignore
    const submitHandler = async ({ email, password }) => {
        closeSnackbar();
        try {
            const { data } = await axios.post('/api/users/login', {
                email,
                password,
            });
            dispatch({ type: 'USER_LOGIN', payload: data });
            Cookies.set('userInfo', data);
            //@ts-ignore
            router.push(redirect || '/');
        } catch (err) {
            enqueueSnackbar(getError(err), { variant: 'error' });
        }
    };
    return (
        <Stack
            align={"center"}
            justify={"center"}
        >
            <CardLogin submitHandler={submitHandler} handleSubmit={handleSubmit} control={control} errors={errors} />
        </Stack>
    )
}