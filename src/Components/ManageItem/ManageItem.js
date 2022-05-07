import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCarDetails from '../../hooks/useCarDetails';

const ManageItem = () => {
    const [carDetails , setCarDetails]= useCarDetails();
   
    const handleDelete=id=>{
        const proceed=window.confirm("Are you sure?");
        if(proceed){
          const url=`http://localhost:5000/inventory/${id}`;
          console.log(url);
          fetch(url, {
            method:'DELETE'
          })
          .then(res=>res.json())
        .then(data=>{console.log(data);
          const remaining= carDetails.filter(carDetail=> carDetail._id !==id);
          setCarDetails(remaining);
        })
        }
      }
    
    return (
        <div className="card-group col-4 mt-1">
        <div className="card">
        {
                carDetails.map(carDetail =><div
                    key={carDetail._id}
                   
                >
                    <h5>{carDetail.name}<button onClick={()=>handleDelete(carDetail._id)}>x</button></h5>
                    
                     </div>
                
                )
            }
          {/* <img src={image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text d-flex justify-content-between rounded">
              <small className="text-muted">{price}</small>
            </p>
            <div>
            <button className="btn-primary border-0 " onClick={()=>navigateToCarDetail(_id)}>Update</button>
            <button className="btn-primary border-0 " onClick={()=>handleDelete(_id)}>Delete</button>
            */}
            </div>
          </div>
        
    
    );
};

export default ManageItem;