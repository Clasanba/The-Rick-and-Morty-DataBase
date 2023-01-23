import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import "../../styles/index.css";
import { CharactersHome } from "../component/home-characters";
import { LocationHome } from "../component/home-location"


const Home = ({favorites, setFavorites}) => {

	const addFavorites = ((characterOrLocation) =>{
		    
			setFavorites([...favorites, characterOrLocation])
		 
		})

	const deleteFavorites = (characterOrLocation)=>{
		const index = favorites.indexOf(characterOrLocation)
		favorites.splice(index,1);
		setFavorites([...favorites])
	}

	const [characters, setCharacters] = useState([]);  
	useEffect(
		() => {
			fetch("https://rickandmortyapi.com/api/character")  
				.then(response => response.json())
				.then(data => {
					setCharacters(data.results)          
					console.log(data);
				})
		}
		, []); 


	const [locations, setLocations] = useState([]); 
	useEffect(
		() => {
			fetch("https://rickandmortyapi.com/api/location")
				.then(response => response.json())
				.then(data => {
					setLocations(data.results)
					console.log(data);
				})
		}

		, [])

	return <div className="bg-gradient">
				<div className="">
					<h1 className="text-center title-character fs-1 fw-semibolder bg-gradient pt-5 text-capitalize">Characters</h1>
				</div>
				<div className="container text-center">
					<div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3  ">
						{characters.map((character, index) => {
							return <div className="col"> <CharactersHome isFavorite={favorites.includes(character)} onAddFavorite={addFavorites} deleteFav={deleteFavorites} character={character} key={index} /></div>
						})}
					</div>
				</div>
				<div className=" ">
					<h1 className="text-center bg-gradient title-location fs-1 fw-semibolder text-capitalize mt-5">Locations</h1>
				</div>
				<div className="container text-center cardCharacters">
					<div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
						{locations.map((location, index) => {
							return <div className="col "><LocationHome isFavorite={favorites.includes(location)} onAddFavorite={addFavorites} deleteFav={deleteFavorites} location={location} key={index} /></div>
						})}
					</div>
				</div>
			</div>
};

export default Home
