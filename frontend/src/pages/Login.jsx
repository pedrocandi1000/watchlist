import React from 'react'


import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {
    return (
        <div>
            <Header />
            <Title>Bem vindo ao WatchList</Title>
            <div className="d-flex justify-content-center">
                <div className="loginBox d-flex justify-content-center align-items-center flex-column w-30 mb-3">
                    <Input
                        className="d-flex justify-content-center"
                        inputName="username"
                        inputPlaceholder="Digite seu nome de usuário"
                        inputType="text"
                    >
                        Nome de usuário
                    </Input>
                    <Input
                        inputName="passwd"
                        inputPlaceholder="Digite sua senha"
                        inputType="password"
                    >
                        Senha
                    </Input>
                    <a className="forgotPasswd" href="">
                        Esqueceu sua senha ?
                </a>
                    <Button type="btn-default">Acessar</Button>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-5 pb-5">
                <Button type="btn-default">Não tenho uma conta</Button>
            </div>
            <Footer/>
        </div>
    )
}

export default Login