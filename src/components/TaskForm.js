import React, { Component } from "react";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            deadline: "",
            complated: false,
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.description.trim()) {
            this.props.onAddTask(this.state);
            console.log(this.state);
            
            this.setState({ description: "", deadline: "", complated: false});
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="p-4">
                    <input
                        type="text"
                        className="me-4"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={(e) => {this.setState({ description: e.target.value})}}
                        required
                    />
                    <input
                        type="date"
                        className="me-4 my-2 my-sm-0"
                        value={this.state.deadline}
                        onChange={(e) => {this.setState({ deadline: e.target.value})}}
                    />
                    <button className="btn btn-primary" type="submit">Add new task</button>
                </div>
            </form>
        );
    }
}

export default TaskForm;
