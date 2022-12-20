import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CharaExtend = ({ character }) => {



  return (
    <>
      <div className="card bg-gradient rounded-5 m-5 box-card-extend" >
        <div className="row g-0" >
          <div className="col-md-4">
            <img src={character.image} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8  ">
            <div className="card-body ">
              <h5 className="fs-1 fw-bold  text-white">{character.name}</h5>
              <p className="card-title   text-white">is...  {character.status}</p>
              <p className="card-text   text-white" >and is...  {character.species}</p>
              <p className="card-text text-white" >Gender...  {character.gender}</p>
              <p className="card-text  text-white" >Origin...  {character.origin?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};