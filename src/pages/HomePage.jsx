import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1 className="hero-title">🚀 Welcome to My Internship Project</h1>
        <p className="hero-subtitle">A modern React app with animations, gradients, and sleek UI</p>
        <div className="hero-buttons">
          <Link to="/todo"><button className="hero-btn">📝 To-Do App</button></Link>
          <Link to="/github"><button className="hero-btn">🐙 GitHub Dashboard</button></Link>
        </div>
      </div>
    </div>
  )
}
