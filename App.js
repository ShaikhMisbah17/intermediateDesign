import React from "react";
import "./App.css";
import logo from "./images/icon.png";
import cardInfo from "./cardInfo";
import Card from "./component/Card";


function createCard(cardInfo){
return <Card 
  key={cardInfo.id}
  img={cardInfo.img}
  team={cardInfo.title}
  teamName={cardInfo.team}
  cost={cardInfo.price}
  inc={cardInfo.trend}
  arrow={cardInfo.trendImg}
/>
}

function App(){
return(
<div className="section-1">
  <h2>Top Movers</h2>
  
  <div className="layout">
  {cardInfo.map(createCard)}
  </div>
   </div>

)
}


export default App;