import { FormLabel, HStack, Input, Stack } from "@chakra-ui/react"

import { FigureImage } from "../components/Figure"

import axios from 'axios'
import { useRouter } from "next/router"
import React, { useContext, useEffect } from 'react';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';


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
            router.push('/login'); // rota anterior router.push('/') 
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
        //@ts-ignore
        <>
            <form onSubmit={handleSubmit(submitHandler)}>




                <FormLabel
                    color="#828282"
                    fontWeight={600}
                >
                    Email
                </FormLabel>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    }}
                    render={({ field }) => (
                        <><Input
                            as="input"
                            placeholder="Digite seu email"
                            _placeholder={{
                                color: "#E0E0E0"
                            }}
                            id="email"
                            //@ts-ignore
                            inputProps={{ type: 'email' }}
                            error={Boolean(errors.email)}
                            helperText={errors.email
                                ? errors.email.type === 'pattern'
                                    ? 'Email is not valid'
                                    : 'Email is required'
                                : ''}
                            {...field}
                        ></Input></>
                    )}
                ></Controller>


                <FormLabel
                    color="#828282"
                    fontWeight={600}
                >
                    Senha</FormLabel>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: true,
                        minLength: 6,
                    }}
                    render={({ field }) => (
                        <Input
                            as="input"
                            placeholder="Digite sua senha"
                            _placeholder={{
                                color: "#E0E0E0"
                            }}
                            id="password"
                            //@ts-ignore
                            inputProps={{ type: 'password' }}
                            error={Boolean(errors.password)}
                            helperText={errors.password
                                ? errors.password.type === 'minLength'
                                    ? 'Password length is more than 5'
                                    : 'Password is required'
                                : ''}
                            {...field}
                        ></Input>
                    )}
                ></Controller>
                <button type="submit">Enviar</button>
            </form></>
    )
}