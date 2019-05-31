import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#0052b4" d="M0 85.333h512V426.67H0z" />
    <path
      fill="#ffda44"
      d="M192 85.33h-64v138.666H0v64h128v138.666h64V287.996h320v-64H192z"
    />
  </svg>
)

export default SvgComponent
