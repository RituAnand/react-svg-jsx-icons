import React from 'react'

const SvgComponent = props => (
  <svg viewBox='0 0 512 512' {...props}>
    <path fill='#f0f0f0' d='M0 85.337h512v341.326H0z' />
    <g fill='#d80027'>
      <path d='M0 85.337h512V153.6H0zM0 221.863h512v68.263H0zM0 358.4h512v68.263H0z' />
    </g>
    <path fill='#0052b4' d='M256 256.006L0 426.668V85.331z' />
    <path
      fill='#f0f0f0'
      d='M83.477 195.132l15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z'
    />
  </svg>
)

export default SvgComponent
