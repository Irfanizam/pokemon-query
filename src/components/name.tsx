import axios from "axios";
import { useQuery } from "react-query";

function usePokemon(name: any) {
    return useQuery(['pokemon', name], async () => {
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return data;
    });
  }

   interface PokemonName {
    pokemon?: any;
    setPokemon?: any;
   }

  const Pokemon: React.FC <PokemonName> = ({pokemon, setPokemon}) => {
    const {isLoading, data} = usePokemon(pokemon);
    console.log(data)
    return (
      <div>
        <a href="#" onClick={() => setPokemon(null)}>
          Back to the list
        </a>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <div>
            <h1>{pokemon}</h1>
            <div></div>
            <img src={data.sprites.front_default} alt={pokemon} />
          </div>
        )}
      </div>
    );
  }

  export default Pokemon;