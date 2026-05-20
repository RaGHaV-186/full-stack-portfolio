import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import useFetch from '../hooks/useFetch'
import useDebounce from '../hooks/useDebounce'

const BASE = 'https://api.themoviedb.org/3'

function SearchPage() {
  const [query, setQuery] = useState('')

  // Build the URL based on whether user has typed anything
const debouncedQuery = useDebounce(query, 500)

const url = debouncedQuery.trim()
  ? `${BASE}/search/movie?query=${encodeURIComponent(debouncedQuery)}&page=1`
  : `${BASE}/movie/popular?page=1`

  const { data, loading, error } = useFetch(url)
  const movies = data?.results || []

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />

      {loading && <p style={{ color: '#888' }}>Loading...</p>}
      {error   && <p style={{ color: '#f87171' }}>Error: {error}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '16px',
      }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default SearchPage