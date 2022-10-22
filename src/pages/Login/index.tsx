import React from 'react'
import {  Content, Wrapper } from '../../../styles/login/styles'
import { InputText } from '../../components/InputText'

export const Login = () => {
  return (
   <Wrapper >
    <Content>
        <aside>
           <img src='/people.png' alt=''/>
        </aside>
        <main>        
         <h1>Acessar o sistema</h1>
        <form>
         <InputText label="Email:" type="email" />
         <InputText label="Senha:" type="password" />
          <button>Login</button>
        </form>
        <a href='/register'>Cadastre-se</a>
        </main>
    </Content>
   </Wrapper>
  )
}
