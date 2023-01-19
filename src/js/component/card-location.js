import React, { Component } from "react";
import { Link } from "react-router-dom";





export const LocatExtend = ({location, character}) => {

    const getIdCharacter =(url)=>{
        return url.substring(41)
    }
    const linkSomeCharacter = (url)=> {
        return '/charextend/'+ getIdCharacter(url);

    }
    const getImageChar = (i) => {
       return getIdCharacter(i).image} 
    

    return (
        <>
            <div className="card bg-gradient rounded-5 m-5 box-card-extend">
                <div className="row g-0">
                
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="fs-1 fw-bold  text-white"> {location.name} </h5>
                            <p className="card-title   text-white" >{location.type}</p>
                            <p className="card-text   text-white" >{location.dimension}</p>
                           <ul>Residentes
                                    {location?.residents?.map((resident, i) =>
                                    <li key={i}>
                                        <a href={linkSomeCharacter(resident)}>{resident}</a>
                                    </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};