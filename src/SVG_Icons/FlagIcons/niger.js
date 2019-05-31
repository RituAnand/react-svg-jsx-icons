import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z" />
    <path fill="#ff9811" d="M0 85.337h512v113.775H0z" />
    <path fill="#6da544" d="M0 312.888h512v113.775H0z" />
    <circle cx={256} cy={256} r={32} fill="#ff9811" />
  </svg>
)

export default SvgComponent
