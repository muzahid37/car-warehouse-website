import React from "react";
import { useNavigate } from "react-router-dom";
import useCarDetails from "../../hooks/useCarDetails";

const ManageItem = () => {
  const [carDetails, setCarDetails] = useCarDetails();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = carDetails.filter(
            (carDetail) => carDetail._id !== id
          );
          setCarDetails(remaining);
        });
    }
  };

  return (
    <div className="card-group col-12 mt-1">
      <div className="card">
        {/* {
                    <h5>{carDetail.name}<button onClick={()=>handleDelete(carDetail._id)}>x</button></h5>
                    
                */}
       
        <table>
          <tr>
            <th>NAME</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>DELETE</th>
          </tr>
          {carDetails.map((carDetail) => {
            return (
              <tr key={carDetail._id}>
                <td>{carDetail.name}</td>
                <td>{carDetail.price}</td>
                <td>{carDetail.quantity}</td>
                <td><button onClick={()=>handleDelete(carDetail._id)}>x</button></td>
              </tr>
            );
          })}
        </table>
      </div>
      );
     
    </div>
  );
};

export default ManageItem;
