import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      })
    );
    setInput("");
  };
  const removeItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    console.log(todos);
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            <span>{todo.text}</span>
            <button onClick={() => removeItem(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
