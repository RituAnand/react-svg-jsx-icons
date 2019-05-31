import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#d80027" d="M0 85.337h512v341.326H0z" />
    <g fill="#0052b4">
      <path d="M0 85.337h512v113.775H0zM0 312.888h512v113.775H0z" />
    </g>
    <path
      fill="#f0f0f0"
      d="M303.49 281.971v-17.809h-11.873v-23.745l-11.872-11.872-11.872 11.872v-23.744L256 204.8l-11.873 11.873v23.744l-11.872-11.872-11.872 11.872v23.745H208.51v17.809h-11.872v17.808h118.724v-17.808z"
    />
  </svg>
)

export default SvgComponent
