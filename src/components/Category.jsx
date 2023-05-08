import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'  
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import React from 'react'

function Category() {
  return (
    <List>
        <Slink to={'/cuisine/italian'}><FaPizzaSlice/>
        <h4>Italian</h4></Slink>
        <Slink to={'/cuisine/american'}><FaHamburger/>
        <h4>American</h4></Slink>
        <Slink to={'/cuisine/Japanese'}><GiChopsticks/>
        <h4>Japanese</h4></Slink>
        <Slink to={'/cuisine/Indian'}><GiNoodles/>
        <h4>Indian</h4></Slink>
    </List>
  )
}

const List=styled.div`
display:flex;
justify-content:center;
margin:1.5rem 0rem;
`
const Slink=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
text-decoration:none;
margin-right:2rem;
width:6rem;
height:6rem;
cursor:pointer;
background:linear-gradient(35deg,#494949,#313131);

h4{
  margin-top:5px;
  color:white;
  font-size:0.8rem;
}
svg{
  color:white;
  font-size:1.5rem;
}
&.active{
  background:linear-gradient(to right, #f27121, #e94057);
  
}

`

export default Category