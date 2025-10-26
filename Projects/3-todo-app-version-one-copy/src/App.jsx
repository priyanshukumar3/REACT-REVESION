import AddTodo from "./components/AddTodo"
import AppName from "./components/Appname"
// import Todoitem from "./components/Todoitem"
import Todoitems from "./components/Todoitems"
import "./App.css"


function App() {
  const todoItems = [
  {
    name: "Buy Milk",
    dueDate: "4/10/23"
  },
  {
    name: "Go To College",
    dueDate: "4/10/23"
  },
  {
    name: "Like and subscribe",
    dueDate: "Like now"
  }

];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Todoitems items={todoItems}></Todoitems>

    </center>
  )
}

export default App

