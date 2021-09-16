import React,{ useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaSun, FaMoon } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { ContextDarkMode } from '../../contexts/contextDarkMode/ContextDarkMode';
import logo from '../../assets/images/api.jpg';


const Navbar = () => {

    const {darkMode, dispatch} = useContext(ContextDarkMode);
    const { dark } = darkMode;

    const refHeaderList = useRef();
    const refListLink = useRef();

    const handleDarkmode = () =>{
        dispatch({
            mode: !dark
        })
    }

    const handleMenuToggle = () => {
        refHeaderList.current.classList.toggle('header__list--active');
    }

    //hay un problema con esta solucion ya que se duplican los eventos cuandos los componentes de re-renderizan (y al hacer click el evento se ejecuta varias veces).
    /*document.addEventListener('click', (e) => {
        console.log(e.target.classList.item(0));
        if(e.target.classList.item(0) === 'header__list-link'){
            refHeaderList.current.classList.toggle('header__list--active');
        }
    })*/



    return (
        <header className="header">
            <div className="header__wrapper">
                <img className="header__log" src={logo} alt=""></img>
                <nav className="header__nav">
                    <div className="header__darkMode-icon">
                        <span onClick={handleDarkmode} className="header__icon">
                            {
                                (!dark)
                                ?
                                    <FaMoon/>
                                :
                                    <FaSun/>
                            }
                            
                        </span>
                        <span onClick={handleMenuToggle}className="header__hamburguer-icon"><GiHamburgerMenu/></span>
                    </div>
                    <ul className="header__list" ref={refHeaderList} >
                        <li className="header__list-item"><Link onClick={handleMenuToggle} ref={refListLink} className="header__list-link animate__animated animate__bounce" to="characters">Characters</Link></li>
                        <li className="header__list-item"><Link onClick={handleMenuToggle} className="header__list-link" to="search">Search</Link></li>
                        <li className="header__list-item"><Link onClick={handleMenuToggle} className="header__list-link" to="about">About</Link></li>
                        <li className="header__list-item"><RiLogoutCircleRLine/></li>
                    </ul>
                </nav>
            </div>
            <h1 className="header__title" id="Begin">Rick and Morty Api</h1>
        </header>
    )
}

export default Navbar
