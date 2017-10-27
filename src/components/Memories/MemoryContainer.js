import React from 'react';
import './MemoryContainer.css';
import '../Users/user-data.js';

// Sets and returns each memory container

function MemoryContainer(props) {
  const memory = props.memory;
  {console.log(props.memory);}
  return (
    <div className={'container'}>  {/* memory */}
      <div>  {/* memory header */}
        {/*const avatar = Object.values(memory.username)*/}  {/* avatar thumbnail will go here when I can get from userData*/}
        <h3>Username: {memory.username}</h3>
      </div>
      <div>  {/* memory body */}
        <h4>{memory.date}</h4>  {/* memory date */}
        <h3><a href={memory.link} target={'_blank'}>{memory.content}</a></h3>  {/* memory content */}
        <img src={memory.image} width='500' alt=''/>
      </div>
    </div>
  )
}

export default MemoryContainer;