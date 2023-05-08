import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
function Popular() {
    const [popular, setPopular] = useState([])
    const getPopular = async () => {
        const check=localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check))
        }
        else{

            const api=await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
            const data=await api.json();
            console.log(data.recipes)
            setPopular(data.recipes)
            localStorage.setItem('popular', JSON.stringify(data.recipes))
        }
    }
    useEffect(()=>{
        getPopular()
    },[])


  return (
    <Outer>
            <h2>Popular Picks</h2>
        <Wrapper >
            <Splide options={{
                type: 'loop',
                rewind:true, 
                autoplay: true,
                perMove: 4,
                perPage: 4, 
                gap: '1.5rem',
                arrows: false,
                pagination: false,
                autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: false,
                    speed: 2
                },
            }} extensions={{AutoScroll}}>

                {popular.map((recipe)=>{
                    return(
                    <SplideSlide>
                        <Card>
                            <Link to={"/recipe/"+recipe.id}>
                            <H1>{recipe.title}</H1>
                            <Div>
                                <Image src={recipe.image} alt={recipe.title}/>
                            </Div>
                            <Wish><AiOutlineHeart/></Wish>
                            </Link>
                        </Card>
                    </SplideSlide>)
        })}
            </Splide>
        </Wrapper>
    </Outer>
  )
}

const Outer=styled.div`
    
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Wish=styled.div`
    position:absolute;
    top:80%;
    left:46%;
    margin-top:1rem;
    font-size:1.8rem;
    color:black;

`
const Wrapper=styled.div`
    width:80%;
    margin:4rem 0rem;
`
const Div=styled.div`
    position:absolute;
    left:10%;
    top:5%;
    height:55%;

`

const Card=styled.div`
    min-height:20rem;
    color:black;
    width:100%;
    // overflow:hidden;
    position:relative;
    display:flex;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    align-items:center;
    background:linear-gradient(rgba(0,0,0,0),#f3ddf2);
    
    `
    
    const Image=styled.img`
    width:89%;
    height:100%;
    object-fit:cover;
    transition:0.5s all ease-in-out;
    &:hover{
        transform:scale(1.25)
    }
    `
    const H1=styled.p`
    position:absolute;
    z-index:10;
    top:55%;
    bottom:0%;
    tranform:translate(-50%,0%);
    color: black;
    word-wrap:break-word;
    padding:1rem;
    // overflow:hidden;
    width:100%;
    text-align:center;
    font-weight:600;
    // height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:15px;
    `



export default Popular