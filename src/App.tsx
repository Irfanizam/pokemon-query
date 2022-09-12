import { useState } from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Pokemon from './components/name'
import PokemonList from './components/pokemon';

const queryClient = new QueryClient();

function App() {
  const [pokemon, setPokemon] = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
        {pokemon ? (
        <Pokemon pokemon={pokemon} setPokemon={setPokemon} />
      ) : (
        <PokemonList setPokemon={setPokemon} />
      )}
    </QueryClientProvider>
  );
}

export default App;