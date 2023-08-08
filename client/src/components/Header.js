import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import logo from './images/Petflix_Logo.png';

console.log(logo);

const Header = (props) => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <div className = 'logo'>
        <img src = {logo} alt = 'no image found'/>
      </div>
      <button onClick = {()=> navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Login In ' : 'Sign In'} 
      </button> 
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  .logo{
    img{
      height: 5rem;
      cursor: pointer;
      margin-left: -2.5rem;
      
    }
  }
  button{
    padding: 0.5rem  1rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
` //this is creating the styled component

export default Header