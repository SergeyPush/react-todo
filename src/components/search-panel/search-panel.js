import React from "react";
import './search-panel.css';

const SearchPanel = () => {
    const placeholderText = 'To search type here...';
    const searchStyle = {
        fontSize:'20px',
        color:'red'
    };
    return <input type="text" style={searchStyle} placeholder={placeholderText} className="search-input"/>
};

export default SearchPanel;
