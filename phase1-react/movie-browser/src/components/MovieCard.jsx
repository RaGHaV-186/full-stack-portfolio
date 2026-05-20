import { Link } from 'react-router-dom'  // ← swap useNavigate for Link

const IMG_BASE = 'https://image.tmdb.org/t/p/w300'

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}          // ← to= instead of onClick
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        style={{
          background: '#1a1a1a',
          border: '1px solid #222',
          borderRadius: '8px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'border-color 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#555'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#222'}
      >
        {movie.poster_path
          ? <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} style={{ width: '100%', display: 'block' }} />
          : <div style={{ height: '200px', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>No Image</div>
        }
        <div style={{ padding: '12px' }}>
          <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{movie.title}</div>
          <div style={{ color: '#888', fontSize: '13px' }}>
            {movie.release_date?.slice(0, 4) || 'N/A'} · ⭐ {movie.vote_average?.toFixed(1)}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard