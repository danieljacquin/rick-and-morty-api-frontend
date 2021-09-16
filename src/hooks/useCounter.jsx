import { useState } from 'react';

const useCounter = () => {
  
    const [counter, setCounter] = useState(1);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }

    return { 
        counter, 
        increase,
        decrease
    }
}

export default useCounter
