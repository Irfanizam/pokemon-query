import axios from "axios";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { useQuery } from "react-query";


function usePokemonList() {
    return useQuery('pokemon', async () => {
      const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50');
      return data.results;
    });
  }

  interface Pokemons {
    setPokemon?: any;
  }

  const PokemonList: React.FC<Pokemons> = ({setPokemon}) => {
    const {isLoading, data} = usePokemonList();
    return (
      <div>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <ul>
            {data.map((pokemon: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, i:number) => (
              <li key={i} >
                <a onClick={() => setPokemon(pokemon.name)} href="#">
                  {pokemon.name}
                </a>
              </li>
            ))}
            
          </ul>
        )}
      </div>
    );
  }

  export default PokemonList;