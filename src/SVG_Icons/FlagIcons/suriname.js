import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#f0f0f0" d="M0 85.331h512v341.337H0z" />
    <path fill="#a2001d" d="M0 196.636h512v118.728H0z" />
    <g fill="#6da544">
      <path d="M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z" />
    </g>
    <path
      fill="#ffda44"
      d="M256.742 218.003l9.43 29.021h30.518L272 264.963l9.431 29.023-24.689-17.937-24.689 17.937 9.431-29.023-24.69-17.939h30.518z"
    />
  </svg>
)

export default SvgComponent
