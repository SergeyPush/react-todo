import React from 'react';
import './todo-list-item.css';


class ToDOListItem extends React.Component {


    onLabelClick=()=>{
            console.log(`Clicked on ${this.props.label}`);
    };

    render() {

        const {label, important=0} = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
        return (
            <span className="todo-list-item">
            <span className="todo-list-item-label"
                  style={style} onClick={this.onLabelClick.bind(this)}
                  >
                {label}
            </span>
            <button type="button" className="btn btn-outline-success btn-sm">
                <i className="fas fa-exclamation"/>
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm">
                <i className="fas fa-trash-alt"/>
            </button>
        </span>)
    }
}


export default ToDOListItem;