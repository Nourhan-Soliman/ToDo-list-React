import { useState } from "react";
import Board from "./Board";

const InputTaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false); 
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null); 

  const handleAddOrEditTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    if (isEditing) {
      const updatedTaskList = taskList.map((task, index) =>
        index === currentTaskIndex ? input : task
      );
      setTaskList(updatedTaskList);
      setIsEditing(false);
    } else {
      setTaskList([...taskList, input]);
    }

    setInput(""); 
  };

  const handleDeleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index); 
    setTaskList(updatedTaskList);
  };

  // Handle editing a task
  const handleEditTask = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setInput(taskList[index]);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{isEditing ? "Edit Task" : "Add a Task"}</h2>
      <form className="d-flex flex-row align-items-center gap-3" onSubmit={handleAddOrEditTask}>
        <input
          className="form-control"
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={`btn ${isEditing ? "btn-warning" : "btn-primary"}`} type="submit">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      <div className="row mt-4">
        {taskList.map((task, index) => (
          <div key={index} className="col-md-4 mb-3">
            <Board
              task={task}
              onDelete={() => handleDeleteTask(index)} 
              onEdit={() => handleEditTask(index)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputTaskList;
