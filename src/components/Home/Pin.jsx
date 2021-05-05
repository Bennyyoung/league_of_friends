import styled from 'styled-components';
import './Pin.css'

export const Pin = (props) => {
 let { urls } = props;

 return (
  <Wrapper className="pin">
   <Container className="pin__container">
    <img src={urls?.regular} alt="pin"/>
   </Container>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 display: inline-flex;
 padding: 8px;
`

const Container = styled.div`
 display: flex;
 align-items: center;
 box-sizing: border-box;
 cursor: pointer;
 width: 235px;

 img {
  display: flex;
  width: 100%;
  cursor: zoom-in;
  border-radius: 16px;
  object-fit: cover;

 }
` 