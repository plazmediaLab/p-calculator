import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
// components
import Container from './components/Container';

function App() {
  return (
    <Fragment>

      <Global 
        styles={css`
          html{
            font-family: var(--font-0);
            /* color: #000; */
          }
        `}
      />

      <Container />

    </Fragment>
  );
}

export default App;
