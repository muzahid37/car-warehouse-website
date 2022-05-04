import React from 'react';
import useCarDetails from '../../hooks/useCarDetails';
import CarDetails from '../CarDetails/CarDetails';

const Inventory = () => {
    const [carDetails]= useCarDetails();
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
           
        </div>
    );
};

export default Inventory;