import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const initialProject = {
  project_id: '',
  project: ''
};

const ProjectsList = ({ project_id, project }) => {
  console.log(project);
  const [editing, setEditing] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(initialProject);
  const [newProject, setNewProject] = useState(initialProject)

  const editProject = project => {
    setEditing(true);
    setProjectToEdit(project);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/user/:id/projects/${project_id}`, projectToEdit)
      .then(res => {
        console.log('Project saved: ', res);
      })
      .catch(err => console.log('saveEdit FAILED:', err))
  };

  const deleteProject = project_id => {
    axiosWithAuth()
      .delete(`/api/user/:id/projects/${project_id}`)
      .then(res => {
        console.log('Project deleted: ', res)
      })
      .catch(err => console.log('deleteProject FAILED:', err))
  }

  const addProject = e => {
    e.preventDefault();
    setNewProject({ ...newProject });
    axiosWithAuth()
      .post("/api/user/:id/projects", newProject)
      .then(res => {
        setNewProject(initialProject)
        console.log('Project added: ', res)
      })
      .catch(err => console.log('addProject FAILED: ', err))
  }

  return (
    <div className="projects">
      <p>GOALS</p>
      <ul>
        {project.map(project => (
          <li key={project_id} onClick={() => editProject(project)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteProject(project_id)
                  }
                }>
                  x
              </span>{" "}
              {project}
            </span>
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
            <input
              onChange={e =>
                setProjectToEdit({ ...projectToEdit, color: e.target.value })
              }
              value={projectToEdit.color}
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

export default ProjectsList;