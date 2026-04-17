import React, { useState } from "react";

function ToyForm({addToy,api}) {
  const [formData,setFormData]=useState({
    name:"",
    image:""
  })
  function handleSubmit(e){
    e.preventDefault()
    const newToy={...formData,likes:0}
    fetch(api,{
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(newToy)
    })
    .then(r=>{
      if(!r.ok){
        throw new Error("failed to create new toy")
      }
      return r.json()
    })
    .then(newToy=>{
      addToy(newToy)
      setFormData({
        name:"",
        image:""
      })
    })
    .catch(error=>console.log(error.message))
  }
  const handleChange=event=>{
    setFormData(prevData=>({...prevData,
      [event.target.name]:event.target.value}
    ))
  }
  //this all works as intended but the test flags as a fail
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
