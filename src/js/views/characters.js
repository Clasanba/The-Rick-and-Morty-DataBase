import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { CharaExtend } from "../component/card-characters";


const CharactersExtended = () => {
    const params = useParams();
    const [charExtended, setcharextended] = useState({});
    useEffect(
        () => {
            fetch("https://rickandmortyapi.com/api/character/" + params.id)
                .then(response => response.json())
                .then(data => {
                    setcharextended(data)
                    console.log(data);
                })
        }
        , [params.id]); 




    return <div className=" mt-5 ">
        <CharaExtend character={charExtended} />
    </div>
};

export default CharactersExtended



