import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#a2001d" d="M0 85.34h512v341.326H0z" />
    <path fill="#0052b4" d="M512 85.334v166.69L0 256.175V85.334z" />
    <path
      fill="#f0f0f0"
      d="M315.362 300.525L256 293.104l-59.362 7.421v-89.044h118.724z"
    />
    <circle cx={256} cy={263.427} r={29.682} fill="#0052b4" />
    <circle cx={256} cy={263.427} r={14.84} fill="#a2001d" />
    <path fill="#6da544" d="M233.739 226.321h44.522L256 248.582z" />
    <path fill="#ffda44" d="M248.576 241.166h14.84v44.522h-14.84z" />
    <path fill="#6da544" d="M279.746 281.232h-47.492l-35.616 19.293h118.724z" />
  </svg>
)

export default SvgComponent
