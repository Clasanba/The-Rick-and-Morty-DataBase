import React, { useState } from "react";
import { Link } from "react-router-dom";
import layout from "../layout";
import RickMortilogo from "../../img/Rick-Morti-logo.png";
import "../../styles/index.css";
import  "../../styles/navBar.css";


const linkSomePlace = (favorite)=> {
	if(favorite.gender){
		return `/charextend/${favorite.id}`
	}else{ return `/locextend/${favorite.id}`}
}

export const Navbar = ({favorites, deleteFavorites}) => {
	

	return (
		<nav className="navbar nvbr ">
			<div>
			<Link to="/" className=" btnlogo text-decoration-none fw-bold rounded-pill p-2">
			Rick and Morty
			</Link>
			</div>
			<div className="ml-auto">
					<div className="dropdown">
					<button className="btn btnFavorite" disabled={favorites.length===0} type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos {favorites.length}
						</button>
						<ul className="dropdown-menu  dropdown-menu-end list-group-flush">
						{
							favorites.map ((favorite, i)=>{ 
								return	(
									<li key={i}  className=" "><Link to={linkSomePlace(favorite)}><p className="card-title">{favorite.name}</p></Link><button type="button" className=" fa-solid fa-delete-left border border-0 bg-transparent" aria-label="Delete" onClick={() => deleteFavorites(i)}></button></li>
									)
							})
						}
						</ul>
					</div>
			
			</div>
		</nav>
	);
};
