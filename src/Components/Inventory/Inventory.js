import React from 'react';
import useCarDetails from '../../hooks/useCarDetails';
import CarDetails from '../CarDetails/CarDetails';

import { useNavigate } from "react-router-dom";

const Inventory = () => {
    const [carDetails]= useCarDetails();
    const navigate=useNavigate()

    const navAddItems=id=>{
      navigate('/addItem');
      console.log(id);
    }
    const navManageItem=id=>{
        navigate('/manageItem')
    }
    return (
        <div className='container'>
            <div className="row">
            {
                carDetails.map(carDetail =><CarDetails
                    key={carDetail._id}
                    carDetail={carDetail}
                ></CarDetails>
                )
            }
            </div>
            <div className="carDetail-left-button mt-5 ">
          <button onClick={navManageItem} className="btn-primary border-0 ">Delete Item</button>
          <button onClick={navAddItems} className="btn-primary border-0 restock-btn">Add Item</button>
      
          </div>
           
        </div>
    );
};

export default Inventory;