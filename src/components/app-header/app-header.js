import React from "react";
import './app-header.css';

const AppHeader = ({todo, done}) => {

    return (
        <div className="app-header">
            <h1>My Todo</h1>
            <h2>{todo} more todo, {done} done</h2>
        </div>
    )
};

export default AppHeader;