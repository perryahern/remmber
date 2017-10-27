import React from 'react';
import './MemoryContainer.css';

// This sets up the Container for each Memory

function MemoryContainer(props) {
  const memory = props.memory;
  return (
    <div>  {/* memory */}
      <div>  {/* memory header */}
        <img alt={memory.memoryContent}/>  {/* avatar thumbnail */}
        {/* <h3>Perry</h3>  memory username */}
        <h3>{memory.username}</h3>
      </div>

      <div>  {/* memory body */}
        <h4>{memory.memoryDate}</h4>  {/* memory date */}
        {/* memory content */}
        <h3><a href={memory.memoryLink} target={'_blank'}>{memory.memoryContent}</a></h3>
      </div>
    </div>
  )
}

export default MemoryContainer;