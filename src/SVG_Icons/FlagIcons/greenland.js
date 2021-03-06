import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#d80027" d="M0 85.34h512v341.326H0z" />
    <g fill="#f0f0f0">
      <path d="M512 85.334v166.69L0 256.175V85.334z" />
      <circle cx={204.054} cy={256.003} r={81.619} />
    </g>
    <path
      d="M122.435 256.003c0-45.078 36.545-81.623 81.623-81.623 45.079 0 81.623 36.545 81.623 81.623"
      fill="#d80027"
    />
  </svg>
)

export default SvgComponent
