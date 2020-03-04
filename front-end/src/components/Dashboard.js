import React, { useEffect } from 'react';
// import CardDeck from 'react-bootstrap/CardDeck'
import ValueCard from './ValueCard';
import { fetchData } from '../actions/Dashboard';
import { connect } from 'react-redux';

const Dashboard = props => {
  
  useEffect(() => props.fetchData());
  return (
    <div className="cards">
        {props.userData.map(data => (
          <ValueCard 
            key={data.id} 
            data={data} />
        ))}
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
  {fetchData}
)(Dashboard);
