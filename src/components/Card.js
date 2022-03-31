import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <a href={props.item.imageUrl} target="_blank">
        <img src={props.item.imageUrl} className="card--image"></img>
      </a>
      <div className="card--content">
        <div className="card--line--one">
          <p className="card--location">
            <i class="fa-solid fa-location-dot"></i>
            {props.item.location}
          </p>
          <a
            href={props.item.googleMapsUrl}
            target="_blank"
            className="google--link"
          >
            {" "}
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <h4 className="card--date">{props.item.startDate}</h4>
        <p className="card--description">{props.item.description}</p>
      </div>
      <hr></hr>
    </div>
  );
}
