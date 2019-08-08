import React from 'react'

const SvgComponent = props => (
  <svg viewBox='0 0 508 508' {...props}>
    <circle cx={254} cy={254} r={254} fill='#54b2e8' />
    <path
      fill='#ffd05b'
      d='M426.8 246.8H270.4L380.8 136l-8.4-8.4L262 238.4V82h-12v156.4L139.2 127.6l-8.4 8.4 110.8 110.8H85.2v12h156.4L130.8 369.2l8.4 8.4L250 267.2v156.4h12V267.2l110.4 110.4 8.4-8.4-110.4-110.4h156.4z'
    />
    <g fill='#fff'>
      <circle cx={253.6} cy={252} r={108} />
      <circle cx={84} cy={252} r={28.4} />
      <circle cx={423.6} cy={252} r={28.4} />
      <circle cx={253.6} cy={82.4} r={28.4} />
      <circle cx={253.6} cy={421.6} r={28.4} />
      <circle cx={133.6} cy={132} r={28.4} />
      <circle cx={373.6} cy={372} r={28.4} />
      <circle cx={373.6} cy={132} r={28.4} />
      <circle cx={133.6} cy={372} r={28.4} />
    </g>
    <g fill='#324a5e'>
      <circle cx={253.6} cy={212} r={37.6} />
      <path d='M325.6 332.4c-19.2 17.2-44.4 27.6-72 27.6s-52.8-10.4-72-27.6c2.8-37.2 34-66.8 72-66.8s69.2 29.2 72 66.8z' />
    </g>
  </svg>
)

export default SvgComponent
