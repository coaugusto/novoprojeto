import styled from 'styled-components';
import px2vw from '../utils/px2vm';

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: ${px2vw(32)};
max-width: 100%;

@media (min-width: 1024px) {
  flex-wrap: nowrap;
}
`;
export const Content = styled.div`
 display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};  
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;
  