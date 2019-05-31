import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#d80027" d="M0 85.337h512v341.326H0z" />
    <path fill="#6da544" d="M196.641 85.337v341.326H0V85.337z" />
    <circle cx={196.641} cy={256} r={64} fill="#ffda44" />
    <path
      d="M160.638 224v40.001c0 19.882 16.118 36 36 36s36-16.118 36-36V224h-72z"
      fill="#d80027"
    />
    <path
      d="M196.638 276c-6.617 0-12-5.383-12-12v-16h24.001v16c-.001 6.616-5.385 12-12.001 12z"
      fill="#f0f0f0"
    />
  </svg>
)

export default SvgComponent
