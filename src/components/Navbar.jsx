import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import {Link} from 'react-router-dom'

window.addEventListener("load", Navbar)
window.addEventListener("resize", Navbar)

function Navbar(){
    const[clicked, setClicked] = useState(false)

   
    const handleClick = () =>{
        if (window.innerWidth <= 800) {
        setClicked(!clicked)
        }
        

       
    }





  return (
    <>
    <NavContainer>
        <h2>TU<span>DEFENSA</span></h2>
        <div className={`links ${clicked ? 'active':''}`}>
            <Link onClick={handleClick} to="/">Inicio</Link>
            <Link onClick={handleClick} to="/">Quienes somos</Link>
            <Link onClick={handleClick} to="/servicios">Servicios</Link>
            <Link onClick={handleClick} to="/">Contáctanos</Link>
            <Link onClick={handleClick} to="/">Preguntas Frecuentes</Link>
        </div>
        <div className="burguer">
            <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
    </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
h2{
    color: #222;
    font-weight: 400;
    span{
      margin-left:10px;
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: #444;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: #444;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        z-index: 1000;
        color: #444;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    z-index: 1000;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: #222;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #FFF;
  position: absolute;
  top: -3000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  transition: all .6s ease ;
  z-index:10;
  
  &.active{
    border-radius: 0 0 50% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

