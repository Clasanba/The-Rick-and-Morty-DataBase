import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CharactersHome = ({ character, onAddFavorite, isFavorite, deleteFav }) => {


    return (<>

        
        <div className="card bckgrnd-cards bg-gradient mt-5">
            <img src={character.image} className="card-img-top img-card" alt="..." />
            <div className="card-body" >
                <h5 className="card-title fs-3 text-dark mb-4">{character.name}</h5>
        
                <div className="d-flex "><p className="card-text text-start ms-4 fw-bold me-3" >How?</p><p> {character.status}!</p></div>
                <div className="d-flex "><p className="card-text text-start ms-4  fw-bold me-3" >What?</p><p>{character.species}</p></div>
                <div className="d-flex "><p className="card-text text-start ms-4 fw-bold me-2" >Where?</p><p>{character.origin.name}</p></div>
                
            </div>
            <div className="card-body btnLinks"> {/* Aquí van los botones de la carta: ir al personaje y favoritos */}
                { !isFavorite ? (<Link to="" onClick= {() => onAddFavorite(character)} className="card-link fa-regular fa-face-grin-hearts text-decoration-none fs-3 text-dark"></Link>) : (<Link to="" onClick= {() => deleteFav(character)} className="card-link fa-solid fa-poop text-decoration-none fs-3 text-dark"></Link>)}
                <Link to={`/charextend/${character.id}`} className="card-link fa-solid fa-circle-plus text-decoration-none fs-3 text-dark"></Link>
            </div>
        </div>


    </>
    );
};
