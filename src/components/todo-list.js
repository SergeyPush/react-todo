import React from "react";
import ToDoListItem from './todo-list-item';
import './todo-list.css';

const ToDoList = ({todos}) => {

    const elements = todos.map(item => {
        console.log(item);
        const {id, ...propsItems} = item;
        console.log(propsItems);

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