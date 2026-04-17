import React from "react";

function ToyCard({id, name,image,likes, updateToy, deleteToy}) {
  
  const handleDelete=()=>{
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"DELETE",
    })
    .then(r=>{
      if(!r.ok){throw new Error("failed to delete toy")}
      deleteToy(id)
    })
    .catch(error=>console.log(error.message))
  }
  const handleLike=()=>{
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"PATCH",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({likes:likes+1})
    })
    .then(r=>{
      if(!r.ok){throw new Error("failed to like toy")}
      return r.json()
    })
    .then(updateToy)
    .catch(error => console.log(error.message))
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name /* Toy's Name */}</h2>
      <img
        src={image /* Toy's Image */}
        alt={name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {'<3'}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
