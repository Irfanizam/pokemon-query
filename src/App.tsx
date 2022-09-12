import { useState } from 'react'
import './App.css'
import Navbar from './components/navBar'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Pokemon from '../src/components/name'
import Names from './components/pokemon'
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState('ditto')
 
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
        <h1>Pokemon Info</h1>
          <Navbar setPage={setPage} />
        <div>
        <ReactQueryDevtools initialIsOpen={false} />
              { page === 'pokemons' ? <Pokemon/> : <Names/>}
        </div>
    </div>
    </QueryClientProvider>

  )
}

export default App

