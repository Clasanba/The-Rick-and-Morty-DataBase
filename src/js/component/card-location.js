import React, { Component } from "react";
import { Link } from "react-router-dom";

export const LocatExtend = ({ location, character,id}) => {

    /*const getIdCharacter =()=>{
         return location.resident.substring(41)
    }
    const linkSomeCharacter = ()=> {
        if (getIdCharacter() === character.id){
            return console.log("Hola que tal")
        }}*/

    return (
        <>
            <div className="card mb-3 bckgrnd-cards bg-gradient">
                <div className="row g-0">
                <div className="col-md-4">
                <img src="https://picsum.photos/300/300?random" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre {location.name} </h5>
                            <p className="card-text" >Tipo:{location.type}</p>
                            <p className="card-text" >Dimensión:{location.dimension}</p>
                           <ul>Residentes
                                    {location?.residents?.map((resident, i) =><li key={i}><a href={resident}>{resident}</a></li>)}
                                
    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};