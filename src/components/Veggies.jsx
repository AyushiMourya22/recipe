import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
function Veggies() {
    const [veggies, setVeggies] = useState([])
    const getVeggies = async () => {
        const check2=localStorage.getItem('veggies');
        if(check2){
            setVeggies(JSON.parse(check2))
        }
        else{

            const api=await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data=await api.json();
            console.log(data.recipes)
            setVeggies(data.recipes)
            localStorage.setItem('veggies', JSON.stringify(data.recipes))
        }
    }
    useEffect(()=>{
        getVeggies()
    },[])

  return (<div>
    <Outer>

   
    <Wrapper >
            <h2>Our Vegetables Picks</h2>
            <Splide options={{
                type: 'loop',
                rewind:true, 
                // autoplay: true,
                // perMove: 3,
                perPage: 3, 
                gap: '2rem',
                arrows: false,
                pagination: false,
                autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: false,
                    speed: 3,
                },
            }} extensions={{AutoScroll}}>

                {veggies.map((recipe)=>{
                    return(
                    <SplideSlide>
                        <Card>
                            <Link to={"/recipe/"+recipe.id}>
                            <H1>{recipe.title}</H1>
                            <Image src={recipe.image} alt={recipe.title}/>
                            <Gradient/>
                            </Link>
                        </Card>
                    </SplideSlide>)
        })}
            </Splide>
        </Wrapper>
        </Outer>
</div>
  )
}

const Outer=styled.div`
    margin:4rem 0rem;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:100%;
    h2{
        text-align:center;
        margin-bottom:3rem;
    }

`

const Wrapper=styled.div`
width:100%;
`

const Card=styled.div`
    min-height:15rem;
    border-radius:2rem;
    // padding:10px;
    width:100%;
    overflow:hidden:
    position:relative;
    `
    
    const Image=styled.img`
    // width:300px;
    // border-radius:20px;
    border-radius:2rem;
    // margin:5px 3px;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
    `
    const H1=styled.p`
    position:absolute;
    z-index:10;
    top:80%;
    bottom:0%;
    tranform:translate(-50%,0%);
    color: white;
    word-wrap:wrap;
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
    const Gradient=styled.div`
    z-index:3;
    border-radius:2rem;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`
export default Veggies