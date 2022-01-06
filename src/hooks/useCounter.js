import {useState} from 'react'

export const useCounter = (initialState) => {
    
    const [counter, setCounter] = useState(initialState)

    const reset = () => {
        setCounter(initialState)
    }

    const increment = (param) => {
        setCounter(prev => prev + param)
    }
    
    const decrement = (param) => {
        setCounter(prev => prev - param)
    }

    return {
        counter, 
        increment,
        decrement,
    }
}