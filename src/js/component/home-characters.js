import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const CharactersHome = ({ character, onAddFavorite, isFavorite, deleteFav }) => {


    return (<>
    
        <div className="card bckgrnd-cards-charact bg-gradient rounded rounded-4 ">
            <div className="">
            <img src={character.image} className="card-img-top img-card rounded-circle bg-gradient " alt="..." />
            </div>
            <div className="card-body">
            <div className="">
            <Link to={`/charextend/${character.id}`} className="text-decoration-none fs-3 icons">
                <h5 className=" card-title fs-3 bg-gradient rounded rounded-4 title-card">{character.name}</h5>
            </Link>
            </div>
            <div className="btnLinks"> 
                { !isFavorite ? (<Link to="" onClick= {() => onAddFavorite(character)} className="card-link fa-regular fa-face-grin-hearts icons text-decoration-none fs-3 "></Link>) : (<Link to="" onClick= {() => deleteFav(character)} className="fa-regular fa-face-frown card-link text-decoration-none icons fs-3 "></Link>)}
            </div>
            </div>
        </div>


    </>
    );
};
