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
  const [resolved, setResolved] = useState(false);
  const [memory, setMemory] = useState([]);

  // useEffect
  useEffect(() => {

  }, [value]);

  const handleClick = e=> {

    if(resolved){

      if(e.target.textContent === '='){
        return
      }
      
      // setValue('0');
      
      // isResolved(e);
      if(e.target.getAttribute('buttonrole') === 'number'){
        buttonActionNumber(e);
        // setResolved(false);
      }
      if(e.target.getAttribute('buttonrole') === 'math'){
        memory.push(value);
        // setOperation(memory);
        if(e.target.textContent === '÷'){
          memory.push('/');
          setValue('0');
          return
        }
        if(e.target.textContent === 'x'){
          memory.push('*');
          setValue('0');
          return
        }
        memory.push(e.target.textContent);
        setOperation(memory);
        setValue('0')
        setResolved(false);
      }
      if(e.target.getAttribute('buttonrole') === 'action'){
        buttonActionActions(e);
        setResolved(false);
      }
      return
    }
    
    // Number
    if(e.target.getAttribute('buttonrole') === 'number'){

      buttonActionNumber(e);

    }

    // Math
    if(e.target.getAttribute('buttonrole') === 'math'){

      buttonActionMath(e);

    }

    // Actions
    if(e.target.getAttribute('buttonrole') === 'action' && operation.length > 0){

      buttonActionActions(e);

    }

  };

  // const isResolved = e => {
  //   if(e.target.getAttribute('buttonrole') === 'number'){
  //     setValue(e.target.textContent);
  //   }
  // };
  const buttonActionNumber = e => {
    if(value === '0'){
      setValue(e.target.textContent)
    }else{
      setValue(value + e.target.textContent)
    }
  };
  const buttonActionMath = e => {
    if(!resolved){
      operation.push(parseInt(value));
    }
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
  };
  const buttonActionActions = e => {
    if(e.target.textContent === 'C'){
      setOperation([])
      setMemory([])
      setValue('0');
      setResolved(false);
    }
    if(e.target.textContent === '=' && operation.length > 0){
      operation.push(parseInt(value));
      const result = eval(operation.join(''))

      if(!Number.isInteger(result)){
        setValue(result.toFixed(3));
      }else{
        setValue(result);
      };

      setResolved(true);
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