import React from 'react';
import { connect } from 'react-redux';
import Memory from './Memory';

const MemoriesList = props => {
  console.log(`props:`, props);
  const memoriesList = props.memoriesList.map((memory, i) => {
    // console.log(`memory:`, memory);
    return (
      <Memory
        memory={ memory }
        avatar={ props.usersList[memory.username].avatar }
        displayName={ props.usersList[memory.username].displayName }
        key={ i }
        index={ i }
      />
    );
  });
  return <div>{memoriesList}</div>;
};

const mapStateToProps = state => {
  console.log(`state:`, state);
  return {
    usersList: state.usersList,
    memoriesList: state.memoriesList
  };
};

export default connect(mapStateToProps)(MemoriesList);
