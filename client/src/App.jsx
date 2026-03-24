import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Could not reach backend'))
  }, [])

  return (
    <main className="app">
      <h1>React + Express Scaffold</h1>
      <p>This is the frontend running with Vite.</p>
      <div className="card">
        <strong>Backend says:</strong>
        <p>{message}</p>
      </div>
    </main>
  )
}

export default App
