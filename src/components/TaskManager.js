import React, { Component } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class TaskManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: JSON.parse(localStorage.getItem("tasks")) || [],
        };
    }

    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks) {
            this.setState({ tasks });
        }
    }

    componentDidUpdate() {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }

    addTask = task => {
        let id = this.state.tasks.length ? this.state.tasks.at(-1).id + 1 : 1

        this.setState(prevState => ({
            tasks: [...prevState.tasks, {id: id ,...task}],
        }));
    };

    toggleComplete = id => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    deleteTask = id => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id),
        }));
    };

    render() {
        return (
            <div className="task-manager">
                <h1 className="text-center border-bottom">To-Do App</h1>
                <TaskForm onAddTask={this.addTask} />
                <TaskList
                    tasks={this.state.tasks}
                    onToggleComplete={this.toggleComplete}
                    onDeleteTask={this.deleteTask}
                />
            </div>
        );
    }
}
export default TaskManager;
