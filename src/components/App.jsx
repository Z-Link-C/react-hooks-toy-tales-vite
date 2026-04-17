import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const api="http://localhost:3001/toys"
  //const [ids,setIds]=useState(1)
  useEffect(()=>{
    fetchMain();
  },[]);
  async function fetchMain(){
    await fetch(api)
    .then(data=>{
      if(!data.ok){throw new Error("failed to get toys")}
      
      return data.json()
    })
    .then(setToys)
    .catch(error=>console.log(error.message))
  }
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  async function handlePost(e){
    await fetch(api,{
        method:'POST',
        body:JSON.stringify({
          name:e.name,
          image:e.image,
          likes:e.likes

        }),
        headers:{'Content-type': 'application/json'}
      })
      .then((resp)=>resp.json())
    fetchMain()
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onPost={handlePost}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toys}/>
    </>
  );
}

export default App;
