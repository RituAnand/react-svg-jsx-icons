import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#338af3" d="M0 85.337h512v341.326H0z" />
    <path
      fill="#ffda44"
      d="M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
    />
    <path
      fill="#d80027"
      d="M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"
    />
    <path
      fill="#ffda44"
      d="M176.287 137.278l9.209 28.342h29.801l-24.11 17.517 9.21 28.342-24.11-17.517-24.109 17.517 9.209-28.342-24.11-17.517h29.801z"
    />
  </svg>
)

export default SvgComponent