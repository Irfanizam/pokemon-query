import React, { useState } from "react";
import { useQuery } from "react-query";



const fetchPokemon = async (namePoke: any) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`);
    return await res.json();
}

interface Props1 {
  pokemon?: any;
  poke?: any;
}


const Pokemon = ({pokemon} : Props1) => {
    const [namePoke, setNamePoke] = useState();
    const {data, status} = useQuery(["pokemons", namePoke], ({}) => 
    fetchPokemon(namePoke));

console.log(data);
return (
    <>
      <button onClick={() => setNamePoke(pokemon.name)} >{pokemon.name}</button>
      {status === 'success' && (
                <div> 
{data.abilities.map((poke: { ability: { name: string } }, i: number) => {
              return <p key={i}>{poke.ability.name}</p>;
            })}                </div>
            )}
     
      </>
);
}
export default Pokemon;