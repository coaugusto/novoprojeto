import React from 'react'
import {  Content, Wrapper } from '../../../styles/login/styles'
import { InputText } from '../../components/InputText'

export const Register = () => {
  return (
   <Wrapper >
    <Content>
        <aside>
           <img src='/people.png' alt=''/>
        </aside>
        <main>        
         <h1>Crie sua conta</h1>
        <form>
         <InputText label="Email:" type="email" />
         <InputText label="Senha:" type="password" />
         <button>          
             <span>Cadastrar</span>  
          </button> 
        </form>
        <a href='/'>Já possuo uma conta</a>
        </main>
    </Content>
   </Wrapper>
  )
}
