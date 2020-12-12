import React from "react";

class TodoInput extends React.Component
{
    render()
    {
        return (
            <div>
                <h3 className="text-center text-capitalize">Todo Input</h3>
                <div className="card card-body my-3">
                    <form onSubmit={this.props.submit}>
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-primary text-white" 
                                        id="basic-addon1">
                                            <i className="fas fa-book " />
                                </span>
                            </div>
                            <input type="text" 
                            className="form-control text-capitalize" 
                            value={this.props.todo_input}
                            onChange={this.props.controlInput}
                            placeholder="Add Todo Item" />
                        </div>
                        <button type="submit" 
                        className={this.props.hasText?this.props.editItem?"btn btn-success btn-block mt-3":"btn btn-primary btn-block mt-3":
                        this.props.editItem?"btn btn-success btn-block mt-3":
                        "btn btn-primary btn-block mt-3 disabled"}
                        >{this.props.editItem?<span>EDIT ITEM</span>: <span>ADD ITEM</span>}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoInput;