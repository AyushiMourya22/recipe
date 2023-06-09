import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
function Recipe() {
    const params=useParams();
    const [details,setdetails]=useState({})
    const [activeTab,setActiveTab]=useState('instructions')

    const fetchDetails=async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detail=await data.json();
        setdetails(detail)
        console.log(detail);
    }

    useEffect(()=>{
        fetchDetails()
    },[params.name])
  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image}></img>
        </div>
        <Info>
            <Button className={activeTab==="instructions"? 'active':''} onClick={()=>setActiveTab("instructions")}>Instructions</Button>
            <Button className={activeTab==="ingredients"? 'active': ''} onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
             {activeTab==='instructions' &&(
                 
                 <div>
                <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
            </div>
             )}
             {activeTab==='ingredients' &&(
            <ul>
                {details.extendedIngredients.map((i)=>{
                    return (
                        <li key={i.id}>{i.original}</li>
                    )
                })}
            </ul>)}
        </Info>
        
    </DetailWrapper>
  )
}

const DetailWrapper=styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
    color:white;
    background:linear-gradient(35deg,#494949,#313131);
}
img{
    width:100%;
}
h2{
    margin-bottom:2rem;
}
h3{
    font-size:18px;
}
li{
    font-size:1.2rem;
    line-height:2.5rem;
}
ul{
    margin-top:2rem;

}
`

const Button=styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
`
const Info=styled.div`
margin-left:5rem;
width:50%;

`


export default Recipe