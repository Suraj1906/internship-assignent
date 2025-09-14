import React from 'react'
import { FiExternalLink } from "react-icons/fi"
export default function GithubCard({ user }) {
  return (
    <article className="github-card slide-in">
      <div className="avatar">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className="github-info">
        <h3>{user.name || user.login}</h3>
        {user.bio && <p className="bio">{user.bio}</p>}
        <p className="meta">{user.location || 'Location not provided'}</p>

        <div className="github-badges">
          <div className="github-badge">👥 {user.followers} Followers</div>
          <div className="github-badge">📦 {user.public_repos} Repos</div>
        </div>

        <a href={user.html_url} target="_blank" rel="noreferrer" className="btn outline">
        <FiExternalLink size={18} style={{ marginRight: "6px" }} />
        View on GitHub</a>
      </div>
    </article>
  )
}
