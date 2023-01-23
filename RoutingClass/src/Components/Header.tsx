import React from 'react';
import styled from 'styled-components';
import{ NavLink } from "react-router-dom"

const Header = () => {
  return (
    <Container>
        <NavLink to = "/">
            <div>Home</div>
        </NavLink>
        <NavLink to = "/about">
        <div>About</div>
        </NavLink>
        <NavLink to = "/contact">
        <div>Contact</div>
        </NavLink>
        <NavLink to = "/docs">
        <div>Docs</div>
        </NavLink>
        <a href="https://www.google.com/">Visit Google</a>
        
        
    </Container>
  )
}

export default Header;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    margin: 20px;
`;