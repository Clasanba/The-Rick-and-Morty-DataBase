import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const LocationHome = ({ location, onAddFavorite, isFavorite, deleteFav }) => {



    return (<>
        <div className="card bckgrnd-cards-locat bg-gradient mt-5 rounded rounded-4">
            <div className="" >
            <Link to={`/locextend/${location.id}`} className="text-decoration-none fs-3 icons">
                <div className="card-title fs-3 bg-gradient mt-4 ms-2 ">
                    <h5 className="fs-3 bg-gradient rounded rounded-4 title-card">{location.name}</h5>
                </div>
            </Link>
            </div>
            <div className="body-card">
                <div className="d-flex text-cards"><p>{location.type}</p></div>
                <div className="card-body btnLinks"> 
                    {!isFavorite ? (<Link to="" onClick= {() => onAddFavorite(location)}
                    className="card-link fa-regular fa-face-grin-hearts icons text-decoration-none fs-3"></Link>) : 
                    (<Link to="" onClick= {() => deleteFav(location)} 
                    className="fa-regular fa-face-frown card-link text-decoration-none icons fs-3"></Link>)}
                </div> 
            </div>
        </div>


    </>
    );
};