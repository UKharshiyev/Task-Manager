import React, { Component } from "react";

class TaskList extends Component {
    render() {
        return (
            <div className="p-3">
                <h1>{this.props.tasks.length ? "Tasks..." : "No Tasks yet..."}</h1>
                <div className="list-group">
                    {this.props.tasks.map((task, i) => {
                        return (
                            <div
                                key={task.id}
                                className={
                                    task.completed
                                        ? "list-group-item list-group-item-action bg-success text-white mb-3"
                                        : "list-group-item list-group-item-action  mb-1"
                                }
                            >
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-8">
                                        <strong>
                                            {i + 1} - Description:
                                        </strong>
                                        {task.description}
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 text-sm-end pt-4 pt-sm-0">
                                        <b>Deadline:</b> {task.deadline}
                                        <svg
                                            onClick={() => {this.props.onDeleteTask(task.id)}}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill={
                                                task.completed
                                                    ? "#eee"
                                                    : "#fe0000"
                                            }
                                            type="button"
                                            className="bi bi-trash-fill mx-4 mx-sm-2 mx-lg-4"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                        </svg>
                                        <svg
                                            onClick={() => {this.props.onToggleComplete(task.id)}}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill={
                                                task.completed
                                                    ? "#ffffff"
                                                    : "green"
                                            }
                                            type="button"
                                            className="bi bi-check-square-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TaskList;
