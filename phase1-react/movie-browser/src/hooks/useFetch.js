import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)      // API response lives here
  const [loading, setLoading] = useState(true) // true while request is in-flight
  const [error, setError] = useState(null)     // holds error message if fetch fails

  useEffect(() => {
    // If no URL passed, do nothing
    if (!url) return

    let cancelled = false // prevents state update if component unmounts mid-fetch

    async function fetchData() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            'Content-Type': 'application/json',
          },
        })

        if (!res.ok) throw new Error(`HTTP error — status: ${res.status}`)

        const json = await res.json()
        if (!cancelled) setData(json)

      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()

    return () => { cancelled = true } // cleanup on unmount
  }, [url]) // re-runs whenever url changes

  return { data, loading, error }
}

export default useFetch