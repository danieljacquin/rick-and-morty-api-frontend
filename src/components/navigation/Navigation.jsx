import React from 'react';
import './navigation.css';
import { ImCross } from 'react-icons/im';

const Navigation = ({counter, increase, decrease, pages}) => {
    const initialPage = 1;

    const handleWindowScroll = () => {
        if(counter === initialPage) return;
        window.scroll(0,0);
    }

    const handleWindowScrollNext = () => {
        if(counter === pages) return;
        window.scroll(0,0);
    }

    return (
        <div className="navigation">
           <button className="navigation__button" onClick={decrease} disabled={(counter === initialPage) && "disabled" }>
                <span className="navigation__button-scrollBy" onClick={handleWindowScroll}>
                    {
                        (counter === 1)
                        ?
                            <ImCross/>
                        :
                            "Prev"
                    }   
                </span>          
            </button>
           <span className="navigation__number">{counter}</span> 
           <button className="navigation__button" onClick={increase} disabled={(counter === pages) && "disabled"}>
                <span className="navigation__button-scrollBy" onClick={handleWindowScrollNext}>
                    {
                        (counter === pages)
                        ?
                            <ImCross/>
                        :
                            "Next"
                    }   
                </span> 
            </button> 
        </div>
    )
}

export default Navigation
