import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { 
  FETCH_USER_VALUES_START, 
  UPDATE_USER_VALUES_START, 
  FETCH_PROJECTS_START, 
  ADD_PROJECT_START, 
  UPDATE_PROJECTS_START, 
  DELETE_PROJECT_START
} from '../../actions/Dashboard';

const DashboardEdit = () => {

  const dispatch = useDispatch();
  const state = useSelector(state = state.dashboard);
  const history = useHistory();

  useEffect(() => {
    dispatch(FETCH_USER_VALUES_START());
    dispatch(FETCH_PROJECTS_START());
    }, [dispatch]);

  // TOP 3
  const importantValues = state.allValues.filter(value => value.important === true);
  const [ top3, setTop3 ] = useState({
    value: {id: `${state.value_id}`, comment: `${state.comment}`}
  });

  const handleSubmitTop3 = () => {
    let v1 = state.allValues.filter(value => value.value_id === Number(top3.v1.id))[0];
    v1.top3 = true;
    v1.comment = top3.v2.comment;
    dispatch(UPDATE_USER_VALUES_START(v1));

    let v2 = state.allValues.filter(value => value.value_id === Number(top3.v2.id))[0];
    v2.top3 = true;
    v2.comment = top3.v2.comment;
    dispatch(UPDATE_USER_VALUES_START(v2));

    let v3 = state.allValues.filter(value => value.value_id === Number(top3.v3.id))[0];
    v3.top3 = true;
    v3.comment = top3.v3.comment;
    dispatch(UPDATE_USER_VALUES_START(v3));
    // console.log(state);
  };
  const handleChangeValue = e => setTop3({...top3, [e.target.name]: {...top3[e.target.name], id: e.target.value}});
  const handleChangeComment = e => setTop3({...top3, [e.target.name]: {...top3[e.target.name], comment: e.target.value}});

  // PROJECTS
  const topValues = state.userValues.filter(value => value.top3 === true);
  const [ project, setProject ] = useState({
    project: '',
    value_id: 0
  });

  const addProject = () => {
    dispatch(ADD_PROJECT_START({value_id: project.value_id, project: project.name}));
  };
  const deleteProject = () => {
    dispatch(DELETE_PROJECT_START(project.project_id));
  };
  const handleChangeProject = e => setProject({...project, name: e.target.value});
  const handleChangeProjectValue = e => setProject({...project, value_id: e.target.value});

  // ALL VALUES
  // const [ value, setValue ] = useState();

  const handleSubmitProject = e => {
    e.preventDefault();
    history.push('/protected');
  }
  
  return (
    <div className="dashboard-edit">
      <div className="top3-edit">
        <h2>Update Your Top Priorities</h2>
        <form onSubmit={handleSubmitTop3}>
          <select onChange={handleChangeValue}>
            <option selected value>Choose</option>
            {importantValues.map(value => {
              return(
              <option key={value.value_id} {...value} >
                {value.value}
              </option>
              )
            })}
          </select>
          <textarea
            name="topValue"
            value={top3.topValue.comment}
            onChange={handleChangeComment}/>
        </form>
        <button type="submit" onClick={handleSubmitTop3}>Save</button>

      </div>
    </div>
  )
};

export default DashboardEdit;
