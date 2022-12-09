import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { LocatExtend } from "../component/card-location";


const LocationsExtended = () => {
    const params = useParams();
    const [locExtended, setlocextended] = useState({}); {/* todo lo relacionado con el apartado personajes */ } {/* llamada a la API */ } {/* actualización de la variable characters */ }
    useEffect(
        () => {
            fetch("https://rickandmortyapi.com/api/location/" + params.id)
                .then(response => response.json())
                .then(data => {
                    setlocextended(data)
                    console.log(data);
                })
        }
        , [params.id]); {/* [] para que se ejecute solo una vez cuando cargue la pagina */ }




    return <div className=" mt-5 ">
        <LocatExtend location={locExtended} />
    </div>
};

export default  LocationsExtended