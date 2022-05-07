import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>
   {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    console.log(url);
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result =>{
        console.log(result);
    } )
};

  return (
    <div className="w-50 mx-auto">
      <h2> Add a item</h2>
      <form className=" d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Item image"
          className="mb-2"
          type="text"
          {...register("image")}
        />
        <input
          placeholder="Description"
          className="mb-2"
          {...register("shortDescription")}
        />
        <input
          placeholder="price"
          className="mb-2"
          type="number"
          {...register("price")}
        />
        <input
          placeholder="stock"
          className="mb-2"
          type="number"
          {...register("stock")}
        />
        <input
          placeholder="supplierName
"
          className="mb-2"
          type="text"
          {...register("supplierName")}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
