import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";
import './App.css';
import Tasks from "./Tasks";


function App() {

  return (

    <div className="App" >
      <div id="container" >
        <Tasks />
        <TodoList />
        <TodoForm />
      </div>
    </div>
  )

}

export default App;
