import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CharaExtend = ({ character }) => {



  return (
    <>
      <div className="card bg-gradient m-5 box-card-extend" >
        <div className="row g-0 rounded-5" >
          <div className="col-md-4">
            <img src={character.image} className="rounded rounded-4" alt="..." />
          </div>
          <div className="col-md-8  ">
            <div className="card-body ">
              <h5 className="fs-1 fw-bold  text-white">{character.name}</h5>
              <div className="d-flex"><p className="card-title text-white me-1">It´s</p><p className="text-white fw-bold "> {character.status}</p></div>
              <div className="d-flex"><p className="card-text text-white me-1" >The species is</p><p className="text-white fw-bold "> {character.species}</p></div>
              <div className="d-flex"><p className="card-text text-white me-1" > The gender is</p><p className="text-white fw-bold "> {character.gender}</p></div>
              <div className="d-flex"><p className="card-text text-white me-1" >The origin is</p><p className="text-white fw-bold "> {character.origin?.name}</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};