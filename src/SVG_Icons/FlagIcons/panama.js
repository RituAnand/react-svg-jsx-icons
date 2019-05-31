import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z" />
    <path d="M256 256v170.663H0V256h256z" fill="#0052b4" />
    <path d="M512 85.337V256H256V85.337h256z" fill="#d80027" />
    <path
      fill="#0052b4"
      d="M128 123.034l11.824 36.389h38.263l-30.955 22.491 11.823 36.389L128 195.813l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
    />
    <path
      fill="#d80027"
      d="M384 293.697l11.824 36.389h38.263l-30.955 22.491 11.823 36.389L384 366.476l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
    />
  </svg>
)

export default SvgComponent
