import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z" />
    <path d="M114.024 256.001L0 141.926v228.17z" />
    <path
      fill="#ffda44"
      d="M161.192 256L0 94.7v47.226l114.024 114.075L0 370.096v47.138z"
    />
    <path
      d="M509.833 289.391c.058-.44.804-.878 2.167-1.318v-65.464H222.602L85.33 85.337H0V94.7L161.192 256 0 417.234v9.429h85.33l137.272-137.272h287.231z"
      fill="#6da544"
    />
    <path
      fill="#0052b4"
      d="M503.181 322.783H236.433l-103.881 103.88H512v-103.88z"
    />
    <path
      fill="#d80027"
      d="M503.181 189.217H512V85.337H132.552l103.881 103.88z"
    />
  </svg>
)

export default SvgComponent
