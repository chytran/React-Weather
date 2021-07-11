import React from 'react'
import styled from 'styled-components';
import { NavPages } from '../data/NavPages';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
    height: 6rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    position: fixed;
`;

const Logo = styled.div`
    color: #fff;
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    height: 100%;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    margin-top: 1.4rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavBars = styled(FaBars)`
        display: inline-block;
        cursor: pointer;
        position: absolute;
        right: 3rem;
        top: 2rem;
        color: #fff;
        font-size: 1.7rem;
        transition: 0.3s;
        
        &:hover {
            color: #121212;
        }

    @media screen and (max-width: 768px){
        display: inline-block;
        cursor: pointer;
        position: absolute;
        right: 2rem;
        top: 1rem;
    }
`;

const NavMenuLink = styled.div`
    color: #fff;
    margin-right: 2rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: "Poppins, sans-serif";
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #121212;
    }
`;
const NavBtn = styled.div`
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <h2>Weatherify</h2>
            </Logo>
            <NavBars />
            {/* <NavMenu>
                {NavPages.map((item, index) => (
                    <NavMenuLink to={item.link} key={index}>
                        {item.title}
                    </NavMenuLink>
                ))}
            </NavMenu> */}
            {/* <NavBtn>
                <Button to="/contact" big="true" primary="true">Contact Us</Button>
            </NavBtn> */}
        </Nav>
    )
}

export default Navbar
