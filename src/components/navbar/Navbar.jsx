import React,{ useContext } from 'react';
import './navbar.css';
import { FaSun, FaMoon } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { ContextDarkMode } from '../../contexts/contextDarkMode/ContextDarkMode';
import logo from '../../assets/images/api.jpg';


const Navbar = () => {

    const {darkMode, dispatch} = useContext(ContextDarkMode);
    const { dark } = darkMode;
    

    const handleDarkmode = () =>{
        dispatch({
            mode: !dark
        })
    }


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
                    </div>
                    <ul className="header__list">
                        <li className="header__list-item">Characters</li>
                        <li className="header__list-item">Episodes</li>
                        <li className="header__list-item">Locations</li>
                        <li className="header__list-item"><RiLogoutCircleRLine/></li>
                    </ul>
                </nav>
            </div>
            <h1 className="header__title">Rick and Morty Api</h1>
        </header>
    )
}

export default Navbar
