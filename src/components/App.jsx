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
  function fetchMain(){
    fetch(api)
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
  function addToy(newToy){
    setToys(prevData=>[...prevData,newToy])
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} api={api}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toys}/>
    </>
  );
}

export default App;
