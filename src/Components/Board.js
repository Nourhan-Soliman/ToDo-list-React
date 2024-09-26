import React from "react";

const Board = ({ task, onDelete, onEdit }) => {
  return (
    <div className="card shadow-sm p-3 mb-5 bg-white rounded">
      <div className="card-body">
        <p className="card-text">{task}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-success" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
