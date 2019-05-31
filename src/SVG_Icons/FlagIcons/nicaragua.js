import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z" />
    <g fill="#338af3">
      <path d="M0 85.337h512v113.775H0zM0 312.888h512v113.775H0z" />
    </g>
    <path
      d="M256 214.447c-22.949 0-41.553 18.603-41.553 41.553S233.05 297.553 256 297.553c22.949 0 41.553-18.603 41.553-41.553S278.949 214.447 256 214.447zm0 65.298c-13.114 0-23.745-10.631-23.745-23.745s10.631-23.745 23.745-23.745 23.745 10.631 23.745 23.745-10.631 23.745-23.745 23.745z"
      fill="#ffda44"
    />
    <path
      fill="#0052b4"
      d="M276.563 261.936L256 256l-20.563 5.936-6.855 11.873h54.836z"
    />
    <path fill="#338af3" d="M256 226.32l-13.709 23.744L256 256l13.709-5.936z" />
    <path fill="#6da544" d="M235.437 261.936h41.126l-6.854-11.872h-27.418z" />
  </svg>
)

export default SvgComponent
