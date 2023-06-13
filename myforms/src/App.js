import React, {useState} from "react";
import Login from "./components/login";
import Signup from './components/signup'
import SignInOutContainer from './container';
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList"
import "./App.css";

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
      <Login />
      <Signup />
      <SignInOutContainer/>
    </div>
  );
}

export default App;
