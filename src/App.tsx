import AddTodo from "./components/AddTodo"
import Navbar from "./components/Navbar"
import ShowTodos from "./components/ShowTodos"
import "./App.css";

const App = () => {
  return (
    <div>
      <main>
        <h1 className="heading">Eisenhower List</h1>
        <Navbar/>
        <AddTodo />
        <ShowTodos/>
      </main>
    </div>
  )
}

export default App