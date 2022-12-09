import React, { Component } from "react";
import { Link } from "react-router-dom";

export const LocationHome = ({ location, onAddFavorite, isFavorite, deleteFav }) => {



    return (<>
        <div className="card ">
        <img src="https://picsum.photos/300/300?random" className="card-img-top" alt="..." />
            <div className="card-body" >
                <h5 className="card-title">{location.name}</h5>
                <p className="card-text" >Tipo:{location.type}</p>
                <p className="card-text" >Dimensión:{location.dimension}</p>
               

            </div>
            <div className="card-body"> {/* Aquí van los botones de la carta: ir al personaje y favoritos */}
                <Link to={`/locextend/${location.id}`} className="card-link">¡Quiero más!</Link>
                <br></br>
                {!isFavorite ? (<Link to="" onClick= {() => onAddFavorite(location)} className="card-link"> I love´t!</Link>) : (<Link to="" onClick= {() => deleteFav(location)} className="card-link"> I hate´t!</Link>)}
            </div>
        </div>


    </>
    );
};