import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#0052b4" d="M0 85.331h512v341.337H0z" />
    <circle cx={256} cy={255.994} r={81.619} fill="#f0f0f0" />
    <circle cx={256} cy={255.994} r={66.783} fill="#6da544" />
    <circle cx={256} cy={255.994} r={44.522} fill="#f0f0f0" />
    <path
      fill="#0052b4"
      d="M256 244.864l-24.116 11.13v18.55L256 289.386l24.116-14.842v-18.55z"
    />
    <path fill="#ffda44" d="M231.88 233.734h48.228v22.261H231.88z" />
    <g fill="#a2001d">
      <path d="M0 85.331h512v29.68H0zM0 396.984h512v29.682H0z" />
    </g>
  </svg>
)

export default SvgComponent
