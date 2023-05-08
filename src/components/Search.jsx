import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
function Search() {
    const [input,setInput]=useState("");
    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input)
    }
  return (
    <Form onSubmit={submitHandler}>
        {/* <div> */}
        <FaSearch size={15}/>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        {/* </div> */}
    </Form>
  )
}

const Form=styled.form`
    position:relative;
    width:75%;
    height:100%;
    div{
        position:absolute;
        width:70%;
        right:0px;
        top:0px;
    }
    input{
        border:none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size:1rem;
        color:white;
        padding:0.8rem 3rem;
        border-radius:1rem;
        outline:none;
        width:100%;
    }
    svg{
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100%,-50%);
        color:white;
        font-size:1.3rem;
    }
`

export default Search