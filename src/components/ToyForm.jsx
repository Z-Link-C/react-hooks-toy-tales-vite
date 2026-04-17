import React, { useState } from "react";

function ToyForm({onPost }) {
  const [toyName,setToyName]=useState('')
  const [toyImg,setToyImg]=useState('')
  const [toyLikes,setToyLikes]=useState(0)
  function handleSubmit(e){
    e.preventDefault()
    const outputs={
      name:toyName,
      image:toyImg,
      likes:toyLikes
    }
    onPost(outputs)
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e)=>setToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e)=>setToyImg(e.target.value)}
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
