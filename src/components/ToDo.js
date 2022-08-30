import React, { useState } from 'react';
import ToDoForm from './ToDoForm';

export default function ToDo() {

    const [tasks, setTasks] = useState([]);

    function updateTasks(e){
        e.preventDefault();
        let newTask = e.target.task.value;
        setTasks([...tasks, newTask]);
        e.target.task.value = '';
    }

    return (
        <>
            <h1 className='text-center'>Brian's Awesome To-Do Generator</h1>
            <ToDoForm handleSubmit={updateTasks}/>
        </>
    )
}
