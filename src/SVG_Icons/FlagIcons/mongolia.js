import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#0052b4" d="M0 85.331h512v341.326H0z" />
    <g fill="#a2001d">
      <path d="M330.207 85.331H512v341.337H330.207zM0 85.331h181.793v341.337H0z" />
    </g>
    <g fill="#ffda44">
      <path d="M113.163 267.125h14.84v59.359h-14.84zM53.793 267.125h14.84v59.359h-14.84z" />
      <circle cx={90.902} cy={289.386} r={14.84} />
      <circle cx={90.902} cy={237.44} r={7.421} />
      <path d="M76.054 311.647h29.682v14.84H76.054zM76.054 252.288h29.682v14.84H76.054zM90.897 185.502l5.255 16.173h17.006l-13.757 9.996 5.252 16.173-13.756-9.996-13.756 9.996 5.251-16.173-13.756-9.996h17.005z" />
    </g>
  </svg>
)

export default SvgComponent
