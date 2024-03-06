import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newName, setNewName] = useState("")
  const [newDate, setNewDate] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if (newName === "") return

    onSubmit(newName, newDate);

    setNewName("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <h1>New Item</h1>
        <label htmlFor="name">Name</label>
        <input
          value={newName}
          onChange={e => setNewName(e.target.value)}
          type="text"
          id="name"
        />
        <label htmlFor="date">Date</label>
        <input
          value={newDate}
          onChange={e => setNewDate(e.target.value)}
          type="date"
          id="date"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
