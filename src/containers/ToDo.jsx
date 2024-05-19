import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import ToDoForm from '../componens/ToDoForm';
import ToDoList from '../componens/ToDoList';

const ToDo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        document.title = `You have ${todos.length} tasks`;
    }, [todos]);

    const handleClick = (todo) => {
        const newTodo = { id: todos.length + 1, task: todo, complete: false };
        setTodos([...todos, newTodo]);
    };

    const handleCheckbox = (id) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) => todo.id === id);

        newTodos[index].complete = !newTodos[index].complete;
        setTodos(newTodos);
    };

    const removeCompleted = () => {
        const newTodos = todos.filter((todo) => !todo.complete);
        setTodos(newTodos);
    };

    return (
        <div className="todo">
            <h2 className="title">To-Do List</h2>
            <ToDoForm handleClick={handleClick} />
            <ToDoList todos={todos} handleCheckbox={handleCheckbox} />
            <Button variant="outlined" color="error" onClick={removeCompleted}>
                Remove completed
            </Button>
        </div>
    );
};

export default ToDo;