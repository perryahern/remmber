import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Memory.css';

// import actions here when you have them!

class Memory extends Component {
  render() {
    const memory = this.props.memory;
    return (
      <div className={'container'}>            {/* memory */}
        <div className={'container-top'}>      {/* memory header */}
          <h3 className={'display-name'}><img src={this.props.avatar} className={'avatar'} alt={''} />{this.props.displayName}</h3>
        </div>
        <div className={'container-mid'}>                          {/* memory body */}
          <div className={'container-mid-left'}>
            <h4><a href={memory.link} target={'_blank'}>{memory.content}</a></h4>  {/* memory content */}
            <h4>{memory.date}</h4>
          </div>
          <div className={'container-mid-right'}>
            <img src={memory.image} className={'content-image'} alt=''/>
          </div>
        </div>
        <div className={'container-bottom'}>Footer</div>
      </div>
    )
  }
}

export default Memory;