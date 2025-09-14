import { createSlice } from '@reduxjs/toolkit'

// Default hardcoded tasks
const defaultItems = [
  { id: 1, text: 'Finish portfolio homepage' },
  { id: 2, text: 'Read React docs for hooks' },
  { id: 3, text: 'Build small project: weather app' },
]

// Load from localStorage or use defaults
const load = () => {
  try {
    const s = localStorage.getItem('todos')
    const parsed = s ? JSON.parse(s) : null
    return parsed && parsed.length ? parsed : defaultItems
  } catch {
    return defaultItems
  }
}

// nextId based on max existing ID
let nextId = load().reduce((max, t) => Math.max(max, t.id), 0) + 1

const save = (items) => {
  try {
    localStorage.setItem('todos', JSON.stringify(items))
  } catch {}
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: load() },
  reducers: {
    addTodo: (state, action) => {
      state.items.unshift({ id: nextId++, text: action.payload })
      save(state.items)
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload)
      save(state.items)
    },
    resetTodos: (state) => {
      state.items = defaultItems.map((task, index) => ({
        ...task,
        id: index + 1,
      }))
      nextId = state.items.length + 1
      save(state.items)
    },
  },
})

export const { addTodo, removeTodo, resetTodos } = todosSlice.actions
export default todosSlice.reducer
