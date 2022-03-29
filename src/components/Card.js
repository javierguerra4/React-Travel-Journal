import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img></img>
      <div className="card--content"></div>
      <h1 className="card--title">{props.item.location}</h1>
    </div>
  );
}
