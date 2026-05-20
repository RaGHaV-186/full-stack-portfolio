import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      padding: '16px 24px',
      borderBottom: '1px solid #222',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    }}>
      <Link to="/search" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
        🎬 Movie Browser
      </Link>
    </nav>
  )
}

export default Navbar