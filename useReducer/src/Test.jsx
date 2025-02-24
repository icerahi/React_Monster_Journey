import { useEffect } from "react";
import { useRef } from "react";
import { useReducer } from "react";

const initialState = [
  { id: 1, task: "hat dhubo", isCompleted: false },
  { id: 2, task: "mukh dhubo", isCompleted: false },
];
const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length + 1,
          task: action.value.task,
          isCompleted: action.value.isCompleted,
        },
      ];
    case "mark_done":
      const task = state.find((task) => task.id === action.id);
      task.isCompleted = true;
      return [...state];
  }
};

const Test = () => {
  const inputField = useRef(null);
  const interval = useRef(null);

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleForm = (formData) => {
    const task = formData.get("task");
    const isCompleted = formData.get("status");
    if (!task) {
      inputField.current.focus();
      inputField.current.placeholder = "You must need to write";
      inputField.current.style.borderColor = "red";
    }
    dispatch({ type: "add", value: { task, isCompleted } });
  };

  return (
    <div>
      <br />
      <hr />
      <form action={handleForm}>
        <input
          ref={inputField}
          name="task"
          type="text"
          placeholder="Task Name"
        />
        <select name="status" id="status" defaultValue={false}>
          <option value={false}>Pending</option>
          <option value={true}>Complete</option>
        </select>
        <button> add</button>
      </form>
      <hr />
      {state.length !== 0 ? (
        state.map((task) => (
          <div key={task.id}>
            <p>Id: {task.id}</p>
            <p>
              <strong>Task: {task.task}</strong>
            </p>
            <p>Completed:{task.isCompleted.toString()}</p>
            <button
              onClick={() => dispatch({ type: "mark_done", id: task.id })}
            >
              Mark Done
            </button>
            <button>Delete</button>
            <button>Update</button>
            <hr />
          </div>
        ))
      ) : (
        <h1>You have no task</h1>
      )}
    </div>
  );
};
export default Test;
