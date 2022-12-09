import React, { useState } from "react";
import { Link } from "react-router-dom";
import layout from "../layout";


const linkSomePlace = (favorite)=> {
	if(favorite.gender){
		return `/charextend/${favorite.id}`
	}else{ return `/locextend/${favorite.id}`}
}

export const Navbar = ({favorites, deleteFavorites}) => {
	

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Rick and Morty </span>
			</Link>
			<div className="ml-auto">
					<div className="dropdown">
					<button className="btn btn-secondary " disabled={favorites.length===0} type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos {favorites.length}
						</button>
						<ul className="dropdown-menu">
						{
							favorites.map ((favorite, i)=>{ 
								return	(
									<li key={i} ><Link to={linkSomePlace(favorite)}><p className="card-title">{favorite.name}</p></Link><button type="button" className=" btn-delete" aria-label="Delete" onClick={() => deleteFavorites(i)}>X</button></li>
									)
							})
						}
						</ul>
					</div>
			
			</div>
		</nav>
	);
};
