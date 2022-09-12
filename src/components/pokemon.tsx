import React, { useState } from "react";
import { useQuery } from "react-query";
import Pokemon from "./name";


const fetchNames = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    return res.json();
}

const Names = () => {
    const {data, status} = useQuery('names', fetchNames);
console.log(data);
return (
    <div>
        <h1>Name</h1>
        
        {status === 'loading' && (
                <div>Loading data ...</div>
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (
                <div> 
                {data.results.map((pokemon: { name: string}) => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
                </div>
            )}
    </div>
);
}
export default Names;