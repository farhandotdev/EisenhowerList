import  { FormEvent, useState } from 'react'
import { useTodos } from '../context/todos';

function AddTodo() {
    const [todo, setTodo] = useState("");
    const {handleAddTodo} = useTodos();
    
    const handleFormData = (e:FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      handleAddTodo(todo);
      setTodo("");
    }
  return (
    <div>
        <form onSubmit={handleFormData} >
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo