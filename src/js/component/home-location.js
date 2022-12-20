import React, { Component } from "react";
import { Link } from "react-router-dom";

export const LocationHome = ({ location, onAddFavorite, isFavorite, deleteFav }) => {



    return (<>
        <div className="card-body bckgrnd-cards-locat bg-gradient rounded mb-2">
            <div className="" >
                <div className="card-title fs-3 text-dark mb-5 "><h5 className="">{location.name}</h5></div>
                <div className="d-flex text-cards mb-1"><p className=" text-start  fw-bold me-1">What is that?</p><p>{location.type}</p></div>
                <div className="d-flex text-cards mb-3"><p className="  text-start ms-2 fw-bold me-1">Dimension</p><p className=" ">{location.dimension}</p></div>
            </div>
            <div className=" btnLinks"> 
                {!isFavorite ? (<Link to="" onClick= {() => onAddFavorite(location)} className="card-link fa-regular fa-face-grin-hearts text-decoration-none fs-3 text-dark"></Link>) : (<Link to="" onClick= {() => deleteFav(location)} className="card-link fa-solid fa-poop text-decoration-none fs-3 text-dark"></Link>)}
                <Link to={`/locextend/${location.id}`} className="card-link fa-solid fa-circle-plus text-decoration-none fs-3 text-dark"></Link>
            </div>
        </div>


    </>
    );
};