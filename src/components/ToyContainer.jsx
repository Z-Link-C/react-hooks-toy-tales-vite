import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData}) {
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
      {toyData.map(toy=><ToyCard key={toy.id}{...toy}/>)}
    </div>
  );
}

export default ToyContainer;
