import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter'
import './css/index.css';

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
            <AppHeader/>
            <div className="controls">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <ToDoList todos={toDoData}/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));

// ReactDOM.render(el, document.getElementById('root'));