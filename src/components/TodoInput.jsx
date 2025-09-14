import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi"


export default function TodoInput({ onSave }) {
  const [text, setText] = useState('')

  const handleSave = () => {
    if (!text.trim()) return
    onSave(text.trim())
    setText('')
  }

  return (
    <div className="todo-input">
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
        placeholder="Enter task..."
      />
      <button className="btn primary" onClick={handleSave}>
      <FiPlus size={18} style={{ marginRight: "6px" }} />
      Save Task</button>
    </div>
  )
}
