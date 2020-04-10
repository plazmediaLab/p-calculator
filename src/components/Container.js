import React, { useState, useEffect } from 'react';
import { Box } from './styled-componets/Componets';
// components
import MainScreen from './MainScreen';
import Buttons from './Buttons';
import Header from '../components/Header';

const Container = () => {

  // Local STATE
  const [operation, setOperation] = useState([]);
  const [value, setValue] = useState('0');
  const [operating, setOperating] = useState(false);

  // useEffect
  useEffect(() => {

  }, [value]);

  const handleClick = e=> {
    
    // Number
    if(e.target.getAttribute('buttonrole') === 'number'){
      if(value === '0'){
        setValue(e.target.textContent)
      }else{
        setValue(value + e.target.textContent)
      }
    }

    // Math
    if(e.target.getAttribute('buttonrole') === 'math'){

      operation.push(parseInt(value));
      if(e.target.textContent === '÷'){
        operation.push('/');
        setValue('0');
        return
      }
      if(e.target.textContent === 'x'){
        operation.push('*');
        setValue('0');
        return
      }
      operation.push(e.target.textContent);
      setValue('0');

    }

    // Actions
    if(e.target.getAttribute('buttonrole') === 'action' && operation.length > 0){
      if(e.target.textContent === 'C'){
        setOperation([])
        setValue('0');
      }
      if(e.target.textContent === '=' && operation.length > 0){
        operation.push(parseInt(value));
        setValue(eval(operation.join('')));
      }
    }

  };

  return (
    <Box>

      <Header />

      <MainScreen
        operation={operation}
        value={value}
      />
      
      <Buttons 
        handleClick={ handleClick }
      />

    </Box>
  );
};

export default Container;