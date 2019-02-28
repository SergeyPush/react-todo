import React from 'react';
import './todo-list-item.css';

const ToDOListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };
    // const items = ['Learn React app', 'Make awesome app'];
    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label"
                style={style}>
                {label}
            </span>
            <button type="button" className="btn btn-outline-success btn-sm">
                <i className="fas fa-exclamation"/>
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm">
                <i className="fas fa-trash-alt"/>
            </button>
        </span>)
};

export default ToDOListItem;