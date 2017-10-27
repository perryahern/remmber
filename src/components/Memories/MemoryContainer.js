import React from 'react';
import './MemoryContainer.css';
// import '../Users/user-data.js';

// Sets and returns each memory container

function MemoryContainer(props) {
  const memory = props.memory;
  // console.log(props.avatar);
  // {console.log(props.memory);}
  // const test = props.memory;
  // const avatar = 
  return (
    <div className={'container'}>  {/* memory */}
      <div>  {/* memory header */}
        {/*const avatar = Object.values(memory.username)*/}  {/* avatar thumbnail will go here when I can get from userData*/}
        <h3><img src={props.avatar} className={'avatar'} /> Username: {memory.username}</h3>
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