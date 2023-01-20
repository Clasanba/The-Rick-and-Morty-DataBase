import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CharaExtend = ({ character }) => {



  return (
    <>
      <div className=" card bg-gradient box-card-extend" >
        <div className="row g-0 rounded-5 " >
          <div className="col-md-4 text-end py-3 ">
            <img src={character.image} className=" img-fluid rounded rounded-4" alt="..." />
          </div>
          <div className="col-md-8 text-center ">
          <div class="card-body">
              <h5 className="fs-1 fw-bold text-white">{character.name}</h5>
              <div className="d-flex ps-2 justify-content-center"><p className="card-title text-card-extend me-2 fw-bold fs-4 ">It´s</p><p className="text-white fw-bold fs-4 "> {character.status}</p></div>
              <div className="d-flex ps-2 justify-content-center"><p className="card-text text-card-extend me-2 fw-bold fs-4" >The species is</p><p className="text-white fw-bold fs-4 "> {character.species}</p></div>
              <div className="d-flex ps-2 justify-content-center"><p className="card-text text-card-extend me-2 fw-bold fs-4" > The gender is</p><p className="text-white fw-bold fs-4 "> {character.gender}</p></div>
              <div className="d-flex ps-2 justify-content-center"><p className="card-text text-card-extend me-2 fw-bold fs-4" >The origin is</p><p className="text-white fw-bold fs-4 "> {character.origin?.name}</p></div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};