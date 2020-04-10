import React from 'react';
// components
import { MainScreenStyled } from './styled-componets/Componets';

const MainScreen = ({ operation, value }) => {

  return (
    <MainScreenStyled>
      <p>{ operation.length < 1 ? 0 : operation }</p>
      <h1>{ value }</h1>
    </MainScreenStyled>
  );
};

export default MainScreen;