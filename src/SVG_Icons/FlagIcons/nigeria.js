import React from 'react'

const SvgComponent = props => (
  <svg viewBox='0 0 512 512' {...props}>
    <path
      d='M170.667 423.721H8.828A8.829 8.829 0 0 1 0 414.893V97.1a8.829 8.829 0 0 1 8.828-8.828h161.839v335.449z'
      fill='#73af00'
    />
    <path fill='#f5f5f5' d='M170.67 88.277h170.67v335.45H170.67z' />
    <path
      d='M503.172 423.721H341.333V88.273h161.839A8.829 8.829 0 0 1 512 97.101v317.793a8.827 8.827 0 0 1-8.828 8.827z'
      fill='#73af00'
    />
  </svg>
)

export default SvgComponent
