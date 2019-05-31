import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#91dc5a" d="M0 85.331h512v341.337H0z" />
    <path fill="#f0f0f0" d="M0 85.331h512v341.337H0z" />
    <g fill="#0052b4">
      <path d="M0 85.331h512v57.188H0zM0 369.48h512v57.177H0z" />
    </g>
    <path fill="#d80027" d="M0 165.215h512v181.582H0z" />
    <circle cx={190.33} cy={255.994} r={65.668} fill="#f0f0f0" />
    <path
      fill="#d80027"
      d="M190.332 190.332l14.734 45.346h47.757l-38.65 28.028 14.849 45.481-38.69-28.16-38.631 28.107 14.79-45.428-38.616-28.028h47.722z"
    />
  </svg>
)

export default SvgComponent
