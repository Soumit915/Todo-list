import React from "react";

class TodoItem extends React.Component
{
    render()
    {
        const curitem = this.props.item;
        return (
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between my-2 pb-2">
                    <h6>{curitem.item}</h6>
                    <div>
                        <span className="text-success mx-2" 
                        onClick={() => {this.props.controlEdit(curitem.id)}}>
                            <i className="fas fa-pen " />
                        </span>
                        <span className="text-danger mx-2"
                        onClick={() => {this.props.deleteItem(curitem.id)}}>
                            <i className="fas fa-trash " />
                        </span>
                    </div>
                </li>
            </ul>
            
        );
    }
}

export default TodoItem;