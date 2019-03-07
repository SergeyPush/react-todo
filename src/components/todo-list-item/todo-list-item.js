import React from 'react';
import './todo-list-item.css';


class ToDOListItem extends React.Component {

    state = {
        done: false,
        important: false
    };



    render() {

        const {label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;
        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done'
        }
        if (important){
            classNames +=' important'
        }

        return (
            <span className={classNames}>
            <span className="todo-list-item-label"
                   onClick={onToggleDone}
            >
                {label}
            </span>
            <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}>
                <i className="fas fa-exclamation" />
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
                <i className="fas fa-trash-alt"/>
            </button>
        </span>)
    }

   }


export default ToDOListItem;