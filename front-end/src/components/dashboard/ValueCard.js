import React, { useState } from "react";
import axiosWithAuth from '../../utils/axiosWithAuth';

const initialProject = {
  project_id: '',
  project: ''
};

const ValueCard = ({ project_id, project }) => {
  console.log(project);
  const [editing, setEditing] = useState(false);
  const [valueToEdit, setValueToEdit] = useState(initialProject);
  const [newProject, setNewProject] = useState(initialProject)

  const editProject = project => {
    setEditing(true);
    setValueToEdit(project);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/user/:id/values/${valueToEdit.value_id}`, valueToEdit)
      .then(res => {
        console.log('Project saved: ', res);
      })
      .catch(err => console.log('saveEdit FAILED:', err))
  };

  const addProject = e => {
    e.preventDefault();
    setNewProject({ ...newProject });
    axiosWithAuth()
      .post("/api/user/:id/values", newProject)
      .then(res => {
        setNewProject(initialProject)
        console.log('Project added: ', res)
      })
      .catch(err => console.log('addProject FAILED: ', err))
  }

  return (
    <div className="value-card">
      
    <div className="edit">
      <a href="https://essentialism-be-api.herokuapp.com/">
        <i class="fas fa-pen"></i>
      </a>
    </div>
      <p>GOALS</p>
      <ul>
        {project.map(project => (
          <li key={project_id} onClick={() => editProject(project)}>
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
            <input
              onChange={e =>
                setValueToEdit({ ...valueToEdit, color: e.target.value })
              }
              value={valueToEdit.value}
            />
          <div className="button-row">
            <button type="submit">SAVE</button>
            <button onClick={() => setEditing(false)}>CANCEL</button>
          </div>        </form>
      )}
        <form onSubmit={addProject}>
            <input onChange={e => setNewProject({ ...newProject, color: e.target.value })} value={newProject.color} />
            <button type="submit">ADD PROJECT</button>
        </form>
    </div>
  );
};

export default ValueCard;