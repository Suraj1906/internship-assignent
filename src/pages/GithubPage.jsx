import React, { useState } from 'react'
import axios from 'axios'
import GithubCard from '../components/GithubCard'
import { useNavigate } from 'react-router-dom'
import Spinner from "../components/Spinner";
import { FiSearch, FiArrowLeft } from "react-icons/fi"

export default function GithubPage() {
  const [query, setQuery] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const searchUser = async () => {
    setError('')
    setUser(null)
    if (!query.trim()) {
      setError('Please enter a username')
      return
    }
    setLoading(true)
    try {
      const res = await axios.get(`https://api.github.com/users/${encodeURIComponent(query.trim())}`)
      setUser(res.data)
    } catch (err) {
      if (err.response && err.response.status === 404) setError('User not found')
      else setError('Failed to fetch user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container github-page">
      <header className="page-header">
        <button className="link-back" onClick={() => navigate(-1)}>
         <FiArrowLeft size={16} style={{ marginRight: "6px" }} />
         Back</button>
        <h2 className="page-title">
  <span className="emoji-icon">🐙</span>
  <span className="gradient-text">GitHub User Search</span>
</h2>

      </header>

      <section className="card">
        <div className="github-search">
          <input className="input" placeholder="Enter GitHub username..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && searchUser()} />
          <button className="btn primary" onClick={searchUser}>
          <FiSearch size={18} style={{ marginRight: "6px" }} />
          Search</button>
        </div>

        {loading && <Spinner />}
        {error && <p className="error">{error}</p>}
        {user && <GithubCard user={user} />}
      </section>
    </main>
  )
}
