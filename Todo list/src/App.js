import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction, UpdateTodoAction } from "./Actions/TodoAction";
import "./App.css";

function App() {

  const [todo, setTodo] = useState();
  
  const dispatch = useDispatch();
 
  const Todo = useSelector((state) => state.Todo);
 
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    console.log(t);
    dispatch(RemoveTodoAction(t));
  };

  const updateHandler =(t) => {
    t.preventDefault();
    console.log(t);
    dispatch(UpdateTodoAction(t));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List APP</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="enter a Todo"
            style={{
              width: 400,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              color: "Red",
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Add
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((y) => (
              <li key={y.id} className="singleTodo">
                <span className="todoTextr">{y.todo}</span>
                <button
                  style={{
                    padding: 12,
                    borderRadius: 25,
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                  onClick={() => updateHandler(y)}
                >
                  Update
                </button>
                <button
                  style={{
                    padding: 12,
                    borderRadius: 25,
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                  onClick={() => removeHandler(y)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
