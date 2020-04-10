import React from 'react';
// components
import Button from './Button';
import { ButtonsStyled } from './styled-componets/Componets';

const Buttons = ({ handleClick }) => {

  return (
    <ButtonsStyled>
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='C'
        className_arg='button-action'
        buttonrole_arg='action'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='+/-'
        className_arg='button-action'
        buttonrole_arg='math'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='%'
        className_arg='button-action'
        buttonrole_arg='math'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='÷'
        className_arg='button-action'
        buttonrole_arg='math'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='7'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='8'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='9'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='x'
        className_arg='button-action'
        buttonrole_arg='math'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='4'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='5'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='6'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='-'
        className_arg='button-action'
        buttonrole_arg='math'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='1'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='2'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='3'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='+'
        className_arg='button-action'
        buttonrole_arg='math'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='0'
        className_arg='span'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='.'
        buttonrole_arg='number'
      />
      <Button 
        onClick_arg={ handleClick }
        innerText_arg='='
        className_arg='equal'
        buttonrole_arg='action'
      />
    </ButtonsStyled>
  );
};

export default Buttons;