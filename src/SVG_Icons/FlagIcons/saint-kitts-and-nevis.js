import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#d80027" d="M0 85.333h512V426.67H0z" />
    <path fill="#6da544" d="M512 85.33H0v341.333" />
    <path
      fill="#ffda44"
      d="M446.679 85.33h-28.845L0 363.887V426.663H94.165L512 148.105V85.33z"
    />
    <path d="M512 85.33h-65.321L0 383.117v43.546h65.32L512 128.876z" />
    <g fill="#f0f0f0">
      <path d="M186.241 265.94l18.902 14.53 19.659-13.487-7.977 22.467 18.902 14.53-23.832-.644-7.979 22.467-6.751-22.867-23.833-.644 19.66-13.487zM289.182 195.323l18.902 14.53 19.659-13.487-7.977 22.467 18.902 14.53-23.833-.645-7.978 22.468-6.752-22.867-23.832-.644 19.66-13.487z" />
    </g>
  </svg>
)

export default SvgComponent