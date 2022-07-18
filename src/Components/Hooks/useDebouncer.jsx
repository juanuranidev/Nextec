import React, { useEffect, useState } from 'react';

const useDebouncer = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    
    useEffect(() => {
        console.log("cargando")
       const handler = setTimeout(() => {
         setDebouncedValue(value);
         console.log("finalizado1")
       }, delay);

       return () => {
         clearTimeout(handler);
         console.log("finalizado2")
        };

    },[value, delay]);

    return {debouncedValue};
}

export default useDebouncer;