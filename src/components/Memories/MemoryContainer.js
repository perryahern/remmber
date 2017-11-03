import React from 'react';
import './MemoryContainer.css';

// Sets and returns each memory container with appropriate user avatar

const MemoryContainer = (props) => {
  const memory = props.memory;
  return (
    <div className={'container'}>    {/* memory */}
      <div>                          {/* memory header */}
        <h3><img src={props.avatar} className={'avatar'} />{memory.username}</h3>
      </div>
      <div>                          {/* memory body */}
        <h4>{memory.date}</h4>       {/* memory date */}
        <h3><a href={memory.link} target={'_blank'}>{memory.content}</a></h3>  {/* memory content */}
        <img src={memory.image} className={'content-image'} alt=''/>
      </div>
    </div>
  )
}

export default MemoryContainer;