import React, {useState} from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState("");
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return <div>
        <h1 className="nuni text-center mt-5">My Todo List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            <button className="nun btn btn-success ml-2">Add</button>
            </form> 
        </div>
};
export default InputTodo;