import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";




export const LocatExtend = ({location, character}) => {


    const getIdCharacter =(url)=>{
        return url.substring(41)
    }
    const linkSomeCharacter = (url)=> {
        return '/charextend/'+ getIdCharacter(url);

        /*{location?.residents?.map((resident, i) =>
                                   <li key={i} >
                                        <a href={linkSomeCharacter(resident)} className= "card-title text-decoration-none ">{resident}</a>
                                    </li>)}*/

    } 
    

    return (
        <>
            <div className="card bg-gradient m-5 box-card-extend">
                <div className="row g-0 rounded-5">
                    
                        <div className=" col-md-8 card-body">
                            <h5 className="fs-1 fw-bold text-white text-center"> {location.name} </h5>
                            <div className="d-flex justify-content-center"><p className="card-title text-card-extend me-1 ">Type</p><p className="text-white fw-bold ">{location.type}</p></div>
                            <div className="d-flex justify-content-center"><p className="card-title text-card-extend me-1 ">Dimension</p><p className="text-white fw-bold ">{location.dimension}</p></div>
                            <ul className=" text-center card-title text-card-extend me-1" style={{listStyleType: 'none'}}>Residents
                                    {location?.residents?.map((resident, i) =>
                                   <li key={i} >
                                        <a href={'/charextend/'+resident.id} className= "card-title text-decoration-none "><img alt={resident.name} src={resident.image}/></a>
                                    </li>)}
                            </ul>
                            
                        </div>
                    
                </div>
            </div>
        </>
    );
};