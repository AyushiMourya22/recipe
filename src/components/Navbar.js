import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Search from './Search';
import {AiOutlineHeart} from 'react-icons/ai';
import {SlUser} from 'react-icons/sl';

function Navbar() {
  return (
    <Nav>
        <Left>
            <div>
            <GiKnifeFork className="rotate-center"/>
            </div>
            <div>
            <Logo to={'/'}>DELICIOUSSS</Logo> 
            </div>
        </Left>
        <Right>
            <S>
            <Search/>
            </S>
            <div>
            <AiOutlineHeart/>
            </div>
            <div>
            <SlUser/>
            </div>
        </Right>
    </Nav>
  )
}

const Logo=styled(Link)`
text-decoration:none;
font-size:2rem;
cursor:pointer;
font-weight:400;
font-family:'Lobster Two', cursive;
`
const Left=styled.div`
display:flex;
align-items:center;
div{
    padding:1.5rem 1rem;
    font-size:2.4rem;
    font-weight:600;
    
}
svg{
    // margin-right:3rem;
    margin-left:6rem;
}
`
const Right=styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
div{
    padding:1.5rem 1rem;

}
svg{
    font-size:1.7rem;
}
`

const S=styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
`

const Nav=styled.div`
position:absolute;
top:0;
z-index:10;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;

`

export default Navbar