import React from "react";
import ToDoListItem from '../todo-list-item';
import './todo-list.css';

const ToDoList = ({todos}) => {

    const elements = todos.map(item => {
        const {id, ...propsItems} = item;

        return (
            <li key={id} className="list-group-item">
                <ToDoListItem
                    {...propsItems}
                />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list p-1">
            {elements}
        </ul>
    );
};

export default ToDoList;