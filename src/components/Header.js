import React from 'react';
import styled from '@emotion/styled';
import IsoReact from '../img/logo192.png';
import IsoPlazmedia from '../img/favicon-white.png';

const HeaderSty = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: auto 1fr;

  img{
    width: 2rem;
    height: 2rem
  }
  .my-logo{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #42b883;
    white-space: nowrap;
    
    span{
      font-weight: 600;
      margin-left: .5rem;
    }
    img{
      margin-left: 1rem;
    }
  }
  img.spin{
    animation: spin 6s linear infinite;
  }
  @keyframes spin {
      0% {
          -webkit-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
                  transform: rotate(0deg);
      }
      100% {
          -webkit-transform: rotate(-360deg);
              -ms-transform: rotate(-360deg);
                  transform: rotate(-360deg);
      }
  }
`;

const Header = () => {
  return (
    <HeaderSty>
      <img src={ IsoReact } alt="Logo React" className="spin"/>
      <small className='my-logo'>
        P-Calculator <span> v1.0.0</span><img src={ IsoPlazmedia } alt="Logo React"/>
      </small>
    </HeaderSty>
  );
};

export default Header;