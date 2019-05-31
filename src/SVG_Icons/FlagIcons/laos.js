import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#0052b4" d="M0 85.337h512v341.326H0z" />
    <g fill="#d80027">
      <path d="M0 85.337h512v113.775H0zM0 312.888h512v113.775H0z" />
    </g>
    <circle cx={256} cy={256} r={47.49} fill="#f0f0f0" />
  </svg>
)

export default SvgComponent
