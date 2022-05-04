import { useEffect, useState } from "react"

const useCarDetails=()=>{
    const [ carDetails, setCarDetails]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data=> setCarDetails(data))
    },[]);
    return [ carDetails, setCarDetails];
} 
export default useCarDetails;