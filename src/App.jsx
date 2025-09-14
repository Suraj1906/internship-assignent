import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomePage from './pages/HomePage.jsx'
import TodoPage from './pages/TodoPage.jsx'
import GithubPage from './pages/GithubPage.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import './styles/index.css'

export default function App() {
  const location = useLocation()

  return (
    <div className="app-root">
      <header className="app-header">
      
      <h1 className="main-heading">
  <span className="emoji-icon">💻</span>
  <span className="gradient-text">Suraj Internship Project</span>
</h1>


        <ThemeToggle />
      </header>

      <main className="app-main">
        <TransitionGroup component={null}>
          <CSSTransition key={location.pathname} classNames="fade-route" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/github" element={<GithubPage />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  )
}
