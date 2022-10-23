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
        display: block;
        padding: ${px2vw(15)};
        
       
        
        strong {
          font-size: ${px2vw(20)};
          padding: ${px2vw(5)};
          
          
        }

        input {
          
          border-radius: ${px2vw(10)};
          padding: ${px2vw(15)};
          align-items:center;
          font-size: ${px2vw(22)};
          margin-top: 10px;
          

        }
      }
      
      
      button {
        display: inline-block;
        align-items: center;
        border: 0;
        color: #ffff;
        width: ${px2vw(320)};
        padding: 1em 3.1em;       
        background:  #027702;
        border-radius: ${px2vw(6)};
        font-size: ${px2vw(22)};
        font-weight: bold;      
        margin-left: ${px2vw(15)};   
        margin-top: 15px ;
        transition: background 0.15s;
        * &:hover {
          background: ${darken(0.05, '#027702')};
      }
      span {
        
        padding: ${px2vw(35)};
        margin:100 100 100px;

      }
     
    }
   
  }

    a {
      display: block;
      text-decoration:none;
      font-weight: bold;
      color: #027702;
      margin-top: 75px;
      margin-left: 5px;
     
        text-align: right;
        padding: ${px2vw(25)}; 
        border-radius: ${px2vw(5)};
        font-size: ${px2vw(22)};
        text-transform: uppercase;      
      
    }
  }






  
`;

  