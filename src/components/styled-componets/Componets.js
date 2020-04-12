import styled from '@emotion/styled';

export const Box = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  display: grid;
  max-width: max-content;
  grid-template-rows: auto 1fr;
  background-color: #1C1C1C;
  padding: 2rem;
  row-gap: 1rem;
  border-radius: 3rem;

  box-shadow: 
    0px 10px 20px 0px rgba(0,0,0,0.3), 
    0px 5px 10px 0px rgba(0,0,0,0.05), 
    0px 3px 6px 0px rgba(0,0,0,0.2);
`; 

export const ButtonsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  gap: 1rem;

  > *{
    display: block;
    padding: 1.5rem;
    font-size: 2.3rem;
    background-color: #1C1C1C;
    border-radius: 2rem;
  }
  > *:hover{
    cursor: pointer;
    background-color: #505050!important;
  }
  > *.span{
    grid-column: span 2;
  }
  > *.button-action{
    background-color: #505050;
  }
  > *.button-action:hover{
    background-color: #818181!important;
  }
  > *.equal{
    background-color: #FF9500;
  }
  > *.equal:hover{
    background-color: #ffaa33!important;
  }
`; 

export const MainScreenStyled = styled.div`
  background-color: #1C1C1C;
  overflow: hidden;
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: .3rem;
  justify-content: end;
  align-items: center;
  text-align: right;
  padding: 2rem .5rem;

  p, h1{
    margin: 0;
    padding: 0;
  }
  p{
    font-size: 2.5rem;
    margin-bottom: .5rem;
    color: #767676;
  }
  h1{
    color: #D4D4D2;
    font-size: 4rem;
  }
`; 