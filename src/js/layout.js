import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import  Home  from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import CharactersExtended from "./views/characters";
import LocationsExtended from "./views/location";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
const [favorites, setFavorites]= useState([])
const deleteFavorites = (characterOrLocation)=>{
	const index = favorites.indexOf(characterOrLocation)
	favorites.splice(index,1);
	setFavorites([...favorites])
}
<Link to={`/charextend/${character.id}`} className="card-link">¡Quiero más!</Link>;
<Link to={`/locextend/${location.id}`} className="card-link">¡Quiero más!</Link>
	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<Navbar  favorites={favorites} deleteFavorites ={deleteFavorites} toCharacter={`/charextend/${character.id}`}  toLocation={`/locextend/${location.id}`}/>
					<Switch>
						<Route exact path={"/"}>
							<Home favorites={favorites} setFavorites={setFavorites}/>
						</Route>
						<Route exact path={"/charextend/:id"}>
							<CharactersExtended/>
						</Route>
						<Route exact path={"/locextend/:id"}>
							<LocationsExtended/>
						</Route>
					</Switch>
					<Footer />
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
