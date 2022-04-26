import React from 'react'
import "./Card.css";
import symbol from "../logoImg/arrow.png";


function Card(props){
  return(
    <div className="frame1">
      <img className="f1" src={props.img}></img>
      <h5>{props.team}</h5>
      <h6>{props.teamName}</h6>
      <div className="b1">
        <h5 className="cost">{props.cost}</h5>
        <h5 className="green">{props.inc}</h5>
        <img className="arrow" src={symbol}></img>
      </div>
    </div>
  )
}

export default Card;