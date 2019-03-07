import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        toDoData: [
            this.createToDoItem('Drink Coffe'),
            this.createToDoItem('Learn React'),
            this.createToDoItem('Make react app')
        ]
    };

    deleteItem = (id) => {
        this.setState(({toDoData}) => {
            const idx = toDoData.findIndex((el) => el.id === id);

            const newArray = [...toDoData.slice(0, idx), ...toDoData.slice(idx + 1)];

            return {
                toDoData: newArray
            }
        })
    };

    createToDoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };

    addItem = (text) => {
        const newItem = this.createToDoItem(text);

        this.setState(({toDoData}) => {

            const newToDoData = [...toDoData, newItem];
            return {
                toDoData: newToDoData
            }
        })
    };


    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    onToggleDone = (id) => {
        this.setState(({toDoData}) => {
               return {
                toDoData: this.toggleProperty(toDoData, id, 'done')
            }
        });
    };

    onToggleImportant = (id) =>{
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'important')
            }
        });
    };

    render() {

        const toDoData = this.state.toDoData;
        const doneCount = toDoData.filter((el) => el.done).length;
        const todoCount = toDoData.filter((el) => !el.done).length;

        return (
            <div>
                <p>{new Date().toDateString()}</p>
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className="controls">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <ToDoList todos={this.state.toDoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}

