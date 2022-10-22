import styled from 'styled-components';
import px2vw from '../utils/px2vm';
import { darken } from 'polished'

export const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: ${px2vw(32)};

`;
export const Content = styled.div` 
  display:flex;
  justify-content: center;
  align-items: center;

  width: ${px2vw(1300)}; 
  margin: ${px2vw(32)};   


  Aside {
    display: flex;
    justify-content: center;
    align-items: center;
   
 
    padding: ${px2vw(20)};

     img {
     display: flex;
     width: ${px2vw(500)};
     padding: ${px2vw(20)};
     margin: ${px2vw(20)};  
  
      } 

  }
  

  main {
    display: block;   
    align-items: center;
    padding: ${px2vw(15)};
    width: ${px2vw(700)}; 
    margin: ${px2vw(32)}; 
    font-size: ${px2vw(20)};

      h1 {
      display: flex;
      text-align:center;
      box-sizing: border-box;
      font-size:${px2vw(60)};
      padding: ${px2vw(20)};
      
      
    }

    form {
      display: block;
      align-items: center;      
      align-content:center;
      max-width: ${px2vw(400)};
      

      label {
        display: flex;
        padding: ${px2vw(15)};
        justify-content: center;
        align-items: center;
        
        strong {
          font-size: ${px2vw(20)};
          font-style: bol;
          padding: ${px2vw(15)};
          margin-right: 10px;
          
        }

        input {
          display: block;
          border-radius: ${px2vw(10)};
          padding: ${px2vw(15)};
          align-items:center;
          font-size: ${px2vw(22)};
          

        }
      }

      button {
        display: inline-block;
        align-items: center;
        padding: 0.7em 5.7em;       
        background:  #027702;
        border-radius: ${px2vw(6)};
        border: 0;
        margin: 0;
        font-size: ${px2vw(22)};
        font-weight: bold;
        color: #ffff;
        margin-top: ${px2vw(15)};   
        margin-left: ${px2vw(100)};       
        transition: background 0.15s;
        * &:hover {
          background: ${darken(0.05, '#027702')};
      }
    
    }
  }

    a {
      display: block;
      margin-top: ${px2vw(30)};  
      text-decoration:none;
      font-weight: bold;
      background: #7e7c7a;
      margin-left: ${px2vw(100)};
      margin-right: ${px2vw(215)};
      color:#ffff;
      text-align: center;
      padding: ${px2vw(15)}; 
      border-radius: ${px2vw(5)};
      font-size: ${px2vw(22)};
      transition: background 0.15s;
        * &:hover {
          background: ${darken(0.05, '#7e7c7a')};
      }
      
             
      
    }
  }






  
`;

  