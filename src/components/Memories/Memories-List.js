import React from 'react';
import { connect } from 'react-redux';
import Memory from './Memory';

const MemoriesList = (props) => {
  const memoriesList = props.memoriesList.map((memory, i) => {
    return <Memory memory={memory} key={i} index={i} />;
  });
  return (
    <div>
      { memoriesList }
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(`state:`, state);
  return {
    memoriesList: state.memoriesList
  };
};

export default connect(mapStateToProps)(MemoriesList);