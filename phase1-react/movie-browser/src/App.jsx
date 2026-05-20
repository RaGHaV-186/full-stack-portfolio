import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchPage from './pages/SearchPage'
import MovieDetailPage from './pages/MovieDetailPage'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '24px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/search" replace />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App