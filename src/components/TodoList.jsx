import React, { useState } from 'react'
import { FiTrash2 } from "react-icons/fi" 

export default function TodoList({ items, onDelete }) {
  const [removing, setRemoving] = useState(null)

  if (!items.length) return <p className="muted">No tasks to show.</p>

  const handleDelete = (id) => {
    setRemoving(id)
    setTimeout(() => onDelete(id), 300)
  }

  return (
    <div className="todo-list">
      {items.map((t) => (
        <article key={t.id} className={`todo-card ${removing === t.id ? 'fade-out' : 'fade-in'}`}>
          <p className="task-text">{t.text}</p>
          <button className="btn danger" onClick={() => handleDelete(t.id)}>
          <FiTrash2 size={18} style={{ marginRight: "6px" }} />
          Delete</button>
        </article>
      ))}
    </div>
  )
}
