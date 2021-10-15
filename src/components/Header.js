import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <NavMenu>
            <a href="/works">Works</a>
            <a href="/blogs">Blogs</a>
            <a href="/contact">Contact</a>
        </NavMenu>
    )
}

export default Header

const NavMenu = styled.div`
height: 70px;
padding: 0 40px;
display: flex;
justify-content:end;
align-items: center;
font-size: 20px;
font-weight: 500;


a{
    margin-left: 33px;
}
`;
