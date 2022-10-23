import styled from 'styled-components';

export const Container = styled.div`
  background-color: #171923;
  position: absolute;
  height: auto;
  top: 100px;
  left: 0px;
  width: auto;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;


  > svg {
    position: fixed;
    color: white;
    width: 10px;
    height: 30px;
    margin-top: 16px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 50;
    }
    to {
      opacity: 1;
      width: auto;
    }
  }
`;

export const Content = styled.div`
  margin-top: 50px;
`;
