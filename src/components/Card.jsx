import React from "react";
import { Link } from 'react-router-dom';

export default function Card(props) {
    const { id, imageUrl, location, googleMapsUrl, title, startDate, endDate, description } = props;
    return (
        <section className="card">
            <img src={imageUrl} alt="image" />
            <div className="info">
                <div className="map">
                    <p className="location">{location}</p>
                    <a className="googleMaps" href={googleMapsUrl} target="_blank">{googleMapsUrl}</a>
                </div>
                <Link to={`/page/${id}`}><h1>{title}</h1></Link>
                <h2 className="date">{startDate} - {endDate}</h2>
                <h2 className="text">{description}</h2>
            </div>
        </section>
    )
    /*  return (
         <section className="card">
             <img src={props.imageUrl} alt="image" />
             <div className="info">
                 <div className="map">
                     <p className="location">{props.location}</p>
                     <a className="googleMaps" href={props.googleMapsUrl} target="_blank">{props.googleMapsUrl}</a>
                 </div>
                 <Link to={`/page/${props.id}`}><h1>{props.title}</h1></Link> 
                 <h2 className="date">{props.startDate} - {props.endDate}</h2>
                 <h2 className="text">{props.description}</h2>
             </div>
         </section>
     ) */
}