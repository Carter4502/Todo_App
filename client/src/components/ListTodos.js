import React, {useEffect, useState} from 'react';
import EditTodo from './EditTodo';

const ListTodos = () => {
    const[todos, setTodos] = useState([]);
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }
    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getTodos();
    }, [])

    return( 
    <div>
    <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th className="nuni">Description</th>
        <th className="nuni">Edit</th>
        <th className="nuni">Delete</th>
      </tr>
    </thead>
    <tbody>
        {todos.map(todo => (
            <tr key={todo.todo_id}>
                <td className="nuni">{todo.description}</td>
                <td className="nuni"><EditTodo todo={todo} /></td>
                <td className="nuni"><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
        ))}
    </tbody>
  </table>
    </div>)
}
export default ListTodos;