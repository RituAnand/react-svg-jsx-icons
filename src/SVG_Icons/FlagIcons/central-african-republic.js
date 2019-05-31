import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#d80027" d="M0 85.333h512V426.67H0z" />
    <g fill="#6da544">
      <path d="M0 255.996h211.478v85.337H0zM300.522 255.996H512v85.337H300.522z" />
    </g>
    <path
      fill="#0052b4"
      d="M0 85.33v85.332h211.478V85.333h89.044v85.329H512V85.33z"
    />
    <g fill="#f0f0f0">
      <path d="M300.522 170.659H512v85.337H300.522zM0 170.659h211.478v85.337H0z" />
    </g>
    <g fill="#ffda44">
      <path d="M300.522 426.659h-89.044V341.33H0v85.332h512V341.33H300.522zM119.678 111.3l4.604 14.172h14.902l-12.054 8.759 4.604 14.171-12.056-8.758-12.054 8.758 4.605-14.171-12.055-8.759h14.9z" />
    </g>
  </svg>
)

export default SvgComponent
