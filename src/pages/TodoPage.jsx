import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../features/todosSlice'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"
import { FiCheckSquare } from "react-icons/fi"


export default function TodoPage() {
  const items = useSelector((state) => state.todos.items)
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')
  const navigate = useNavigate()

  const handleAdd = (text) => {
    dispatch(addTodo(text))
  }

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }

  const filtered = items.filter((t) => t.text.toLowerCase().includes(filter.toLowerCase()))

  return (
    <main className="container todo-page">
      <header className="page-header">
        <button className="link-back" onClick={() => navigate(-1)}>
        <FiArrowLeft size={16} style={{ marginRight: "6px" }} />
         Back</button>
        <h2 className="page-title">
  <span className="emoji-icon">📝</span>
  <span className="gradient-text">To-Do App</span>
</h2>

      </header>

      <section className="card">
        <TodoInput onSave={handleAdd} />
        <div className="search-row">
          <input className="input" placeholder="Search tasks..." value={filter} onChange={(e) => setFilter(e.target.value)} />
        </div>

        <TodoList items={filtered} onDelete={handleDelete} />
      </section>
    </main>
  )
}
