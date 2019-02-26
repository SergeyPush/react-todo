import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1>My Todo list</h1>
        <input type="text" placeholder="search"/>
        <ul>
            <li className="li">Learn React app</li>
            <li className="li">Make awesome app</li>
        </ul>
    </div>
);

ReactDOM.render(el, document.getElementById('root'));

// ReactDOM.render(el, document.getElementById('root'));