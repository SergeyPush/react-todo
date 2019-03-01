import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'
import './app.css';

const App = () => {

    const toDoData = [
        {label: 'Drink Cofee', important: false, id: 1},
        {label: 'Learn React', important: true, id: 2},
        {label: 'Make React app', important: true, id: 3}
    ];

    const isLoggendIn = true;
    const loginBox = <span>LogIn please</span>;
    const welcomeBox = <span>Welcome, Sergii</span>;

    return (
        <div>
            {isLoggendIn ? welcomeBox : loginBox}
            <p>{new Date().toDateString()}</p>
            <AppHeader  todo={1} done={3}/>
            <div className="controls">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <ToDoList todos={toDoData}/>
        </div>
    )
};

export default App;