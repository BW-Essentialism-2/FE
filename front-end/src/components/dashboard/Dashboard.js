import React, { useEffect } from 'react';
import ValueCard from './ValueCard';
import ProjectCard from './ProjectCard';
import { fetchData, fetchProjects } from '../../actions/Dashboard';
import { connect } from 'react-redux';

const Dashboard = props => {
  
  useEffect(() => props.fetchData());
  useEffect(() => props.fetchProjects());

    return (
      <div className="dashboard">
        <div className="value">
            {props.userData.map(data => (
              <ValueCard 
                key={data.id} 
                data={data} />
            ))}
        </div>
        <div className="projects">
            {props.userData.map(data => (
              <ProjectCard 
                key={data.id} 
                data={data} />
            ))}
        </div>
      </div>
    )
};

const mapStateToProps = state => {
  return {
    userData: state.userData,
  }
};

export default connect(
  mapStateToProps,
  {fetchData, fetchProjects}
)(Dashboard);
