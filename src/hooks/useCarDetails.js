import { useEffect, useState } from "react"

const useCarDetails=()=>{
    const [ carDetails, setCarDetails]=useState([]);

    useEffect(()=>{
        fetch('https://salty-badlands-27477.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=> setCarDetails(data))
    },[]);
    return [ carDetails, setCarDetails];
} 
export default useCarDetails;