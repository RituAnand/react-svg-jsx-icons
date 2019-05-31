import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#d80027" d="M341.334 85.33H0v341.332h512V85.33z" />
    <path fill="#6da544" d="M0 85.333h170.663V426.67H0z" />
    <path fill="#f0f0f0" d="M170.663 85.333h170.663V426.67H170.663z" />
    <path
      d="M208 255.996c0 26.509 21.491 48 48 48s48-21.491 48-48v-16h-96v16z"
      fill="#6da544"
    />
    <path
      d="M320 223.996h-48c0-8.836-7.164-16-16-16s-16 7.164-16 16h-48c0 8.836 7.697 16 16.533 16H208c0 8.836 7.164 16 16 16 0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16 8.836 0 16-7.164 16-16h-.533c8.836 0 16.533-7.163 16.533-16z"
      fill="#ff9811"
    />
  </svg>
)

export default SvgComponent
