import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const BASE = 'https://api.themoviedb.org/3'
const IMG_BASE = 'https://image.tmdb.org/t/p/w500'

function MovieDetailPage() {
  const { id } = useParams()   // reads :id from the URL
  const navigate = useNavigate()
  const { data: movie, loading, error } = useFetch(`${BASE}/movie/${id}`)

  if (loading) return <p style={{ color: '#888' }}>Loading...</p>
  if (error)   return <p style={{ color: '#f87171' }}>Error: {error}</p>
  if (!movie)  return null

  return (
    <div style={{ maxWidth: '700px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: '20px', background: 'none', border: '1px solid #444', color: '#aaa', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer' }}
      >
        ← Back
      </button>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {movie.poster_path && (
          <img
            src={`${IMG_BASE}${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '200px', borderRadius: '8px', flexShrink: 0 }}
          />
        )}
        <div>
          <h1 style={{ fontSize: '22px', marginBottom: '8px' }}>{movie.title}</h1>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '16px' }}>
            {movie.release_date?.slice(0, 4)} · {movie.runtime} min · ⭐ {movie.vote_average?.toFixed(1)}
          </p>
          <p style={{ color: '#ccc', lineHeight: 1.7, fontSize: '14px' }}>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailPage