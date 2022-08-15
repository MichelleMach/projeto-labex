import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as C from './styled'

import axios from 'axios'

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const navigate = useNavigate()

    const Login = () => {

        const infos = {
            "email": email,
            "password": password
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/login`, infos)
            .then((res) => {
                console.log("Foi um sucesso", res.data)
                localStorage.setItem('token', res.data.token)
                navigate("/admin")
            })
            .catch((err) => {
                console.log("Deu ruim", err.response)
            })
    }

    return (
        <C.Container>

            <C.ContainerInfo>

                <C.Titulo>LOGIN</C.Titulo>

                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 3, width: '40ch' }, }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        label='email'
                        variant="outlined"
                        type="email"
                        onChange={onChangeEmail}
                        // color='warning'
                      
                    />

                    <TextField
                        label='password'
                        variant="outlined"
                        type="password"
                        onChange={onChangePassword}
                        // color='primary'
                      
                    />

                </Box>
                <C.Button onClick={Login}>ENTRAR</C.Button>

            </C.ContainerInfo>
        </C.Container >
    )
}
