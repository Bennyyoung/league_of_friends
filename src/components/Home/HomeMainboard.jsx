import styled from 'styled-components';
import { Pin } from './Pin'
import './HomeMainboard.css'

export const HomeMainboard = (props) => {
 let { pins } = props;


  return (
    <Wrapper>
      <Container className="mainboard__container">
       {pins.map((pin, index) => {
        let { urls } = pin;
        return <Pin key={index} urls={urls}/>
       })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: white;
`
