import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <a href={props.item.imageUrl} target="_blank">
        <img src={props.item.imageUrl} className="card--image"></img>
      </a>
      <div className="card--content">
        <p className="card--location">
          <i class="fa-solid fa-location-dot"></i>
          {props.item.location}
        </p>
        <a href={props.item.googleMapsUrl} target="_blank">
          {" "}
          View on Google Maps
        </a>
        <h1 className="card--title">{props.item.title}</h1>
        <h4 className="card--date">{props.item.startDate}</h4>
        <p className="card--description">{props.item.description}</p>
      </div>
      <hr></hr>
    </div>
  );
}
