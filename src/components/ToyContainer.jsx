import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, updateToy,deleteToy}) {
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
      {toyData.map(toy=>
      <ToyCard key={toy.id}{...toy} 
      updateToy={updateToy}
      deleteToy={deleteToy}
      />)}
    </div>
  );
}

export default ToyContainer;
