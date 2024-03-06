export function TodoItem({ completed, id, title, date, toggleTodo, deleteTodo }) {
  const formatDate = date => {
    return date.substring(5);
  }
  
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <p>{title}</p>
        <p>{formatDate(date)}</p>
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}
