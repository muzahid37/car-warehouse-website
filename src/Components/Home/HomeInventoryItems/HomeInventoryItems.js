import React from 'react';
import useCarDetails from '../../../hooks/useCarDetails';
import HomeInventoryItem from '../../HomeInventoryItem/HomeInventoryItem';

const HomeInventoryItems = () => {
    const [carDetails , setCarDetails]= useCarDetails();
    return (
        <div className='container'>
            <h2 className='text-primary mt-5  mb-5'>Our Inventory items</h2>
            <div className="row">
            {
                carDetails.slice(0,6).map(carDetail =><HomeInventoryItem
                    key={carDetail._id}
                    carDetail={carDetail}
                > </HomeInventoryItem>
                
                )
            }
            </div>
           
        </div>
    );
};

export default HomeInventoryItems;