import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Navbar = ({favorites, deleteFavorites}) => {

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Rick and Morty </span>
			</Link>
			<div className="ml-auto">
				
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos {favorites.length}
						</button>
						<ul className="dropdown-menu">
							{favorites.map((favorite, i)=>
								(<li key={i}><a  className="dropdown-item" href="#">{favorite.name}</a><button type="button" className=" btn-delete" aria-label="Delete" onClick={() => deleteFavorites(i)}></button></li>)
							)}
  						</ul>
					</div>
			
			</div>
		</nav>
	);
};
