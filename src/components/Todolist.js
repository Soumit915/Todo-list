import React from "react";

class Todolist extends React.Component
{
    render()
    {
        return (
            <div>
                <button className="btn btn-danger btn-block text-center text-uppercase my-5"
                        onClick={this.props.deleteFullList}>
                    clear list</button>
            </div>
        );
    }
}

export default Todolist;