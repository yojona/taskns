import React from 'react'
import './style.css'

export default props => {
  return <div style={styles.container}>
    <div className='spinner' style={
      { width: props.size || 16,
        height: props.size || 16,
        borderWidth: props.weight || 4,
        borderColor: props.backgroundColor || 'transparent',
        borderTopColor: props.color || 'black',
        animationTimingFunction: props.animation || 'linear',
        animationDuration: `${props.speed}s` || '0.8s',
        animationIterationCount: 'infinite',
        display: props.hidden === true ? 'none' : 'inline-block'
      }} />
    <span style={Object.assign({}, styles.label, {fontSize: props.labelSize || 14})}> {props.label || ''} </span>
  </div>
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    paddingLeft: 8
  }
}
