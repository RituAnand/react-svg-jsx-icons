import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#338af3" d="M0 85.337h512v341.326H0z" />
    <path fill="#6da544" d="M0 426.663V85.337h512" />
    <path
      fill="#ffda44"
      d="M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
    />
    <path d="M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z" />
  </svg>
)

export default SvgComponent
