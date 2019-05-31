import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#ffda44" d="M0 85.337h512v341.326H0z" />
    <g fill="#496e2d">
      <path d="M0 85.337h512V153.6H0zM0 358.4h512v68.263H0zM0 221.863h512v68.263H0z" />
    </g>
    <path fill="#d80027" d="M0 85.337h204.054v204.054H0z" />
    <path
      fill="#f0f0f0"
      d="M102.026 133.938l13.26 40.812h42.916l-34.718 25.226 13.26 40.814-34.718-25.224-34.719 25.224 13.263-40.814-34.718-25.226h42.913z"
    />
  </svg>
)

export default SvgComponent
