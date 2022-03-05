import Header from '../components/Header';
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";





export default function AllBeers(){

    const [beers, setBeers] = useState([])

    useEffect(()=>{
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => setBeers(response.data))
    },[])

    return(
        <div>
            <Header />

            <h3>List of Beers</h3>
            {beers.map((beer) => (
               
                    <div>
                        {beer.name}
                    </div>
               
            ))}
        </div>

    )
}