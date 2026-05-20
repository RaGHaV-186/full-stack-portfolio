function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search movies..."
      style={{
        width: '100%',
        maxWidth: '480px',
        padding: '10px 16px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #333',
        background: '#1a1a1a',
        color: '#f0f0f0',
        outline: 'none',
        display: 'block',
        marginBottom: '24px',
      }}
    />
  )
}

export default SearchBar