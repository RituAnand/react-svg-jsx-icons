import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z" />
    <path fill="#ff9811" d="M0 85.337h512v113.775H0z" />
    <path fill="#6da544" d="M0 312.888h512v113.775H0z" />
    <circle cx={256} cy={256} r={43.896} fill="#0052b4" />
    <circle cx={256} cy={256} r={27.434} fill="#f0f0f0" />
    <path
      fill="#0052b4"
      d="M256 222.146l8.464 19.195 20.855-2.268L272.927 256l12.392 16.927-20.855-2.268L256 289.854l-8.464-19.195-20.855 2.268L239.073 256l-12.392-16.927 20.855 2.268z"
    />
  </svg>
)

export default SvgComponent
