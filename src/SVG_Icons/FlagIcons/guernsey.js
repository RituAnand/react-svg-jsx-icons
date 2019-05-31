import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z" />
    <path
      fill="#d80027"
      d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"
    />
    <path
      fill="#ffda44"
      d="M319.304 265.735l14.609 9.739v-38.956l-14.609 9.739h-53.565v-53.565l9.739-14.609h-38.956l9.739 14.609v53.565h-53.565l-14.609-9.739v38.956l14.609-9.739h53.565V319.3l-9.739 14.609h38.956l-9.739-14.609v-53.565z"
    />
  </svg>
)

export default SvgComponent
