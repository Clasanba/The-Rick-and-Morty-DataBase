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

	const [characters, setCharacters] = useState([]);  {/* todo lo relacionado con el apartado personajes */ } {/* llamada a la API */} {/* actualización de la variable characters */}
	useEffect(
		() => {
			fetch("https://rickandmortyapi.com/api/character")  
				.then(response => response.json())
				.then(data => {
					setCharacters(data.results)          
					console.log(data);
				})
		}
		, []); {/* [] para que se ejecute solo una vez cuando cargue la pagina */}


	const [locations, setLocations] = useState([]); {/* todo lo relacionado con el apartado lugares */ }
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

	return <div className=" mt-5">
		
		<div className="text-left ">
			<h1>Personajes</h1>
		</div>
		<div className="container text-center cardCharacters">
		<div className="row align-items-start">
		
			{characters.map((character, index) => { 
				return <div className=" col-md-3 "> <CharactersHome  isFavorite={favorites.includes(character)} onAddFavorite={addFavorites} deleteFav={deleteFavorites} character={character} key={index} /></div>
			})}
		
		</div>
		</div>
		<div className="text-left">
			<h1>Lugares</h1>
		</div>
		<div className="container text-center cardCharacters">
		<div className="row align-items-start">
		
			{locations.map((location, index) => {
				return <div className="col-md-3 "><LocationHome isFavorite={favorites.includes(location)} onAddFavorite={addFavorites} deleteFav={deleteFavorites} location={location} key={index} /></div>
			})}
		</div>
		</div>
	</div>
};

export default Home
