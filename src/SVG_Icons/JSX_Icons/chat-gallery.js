import React from 'react'

const SvgComponent = props => (
  <svg viewBox='0 0 512 512' {...props}>
    <circle cx={256} cy={256} r={256} fill='#b8a6ed' />
    <path
      d='M512 256L398.222 142.222l-99.987 145.096-184.458 54.015s70.072 103.857 132.791 170.475c3.132.114 6.273.191 9.431.191C397.384 512 512 397.384 512 256z'
      fill='#a390db'
    />
    <path fill='#71e2ef' d='M113.778 142.222h284.444v199.111H113.778z' />
    <path fill='#38c6d9' d='M256.293 142.222h141.929v199.111H256.293z' />
    <path fill='#fff' d='M144.998 167.202h222.005v149.152H144.998z' />
    <g fill='#d0d1d3'>
      <path d='M256.293 167.202h110.709v149.152H256.293z' />
      <path d='M144.998 284.444h222.005v31.913H144.998z' />
    </g>
    <path fill='#a6a8aa' d='M256.293 284.444h110.709v31.913H256.293z' />
    <path
      fill='#ff7f4f'
      d='M168.176 284.444l56.888-56.888L253.509 256l56.889-56.889 54.113 85.333z'
    />
    <path fill='#b54324' d='M310.398 199.111l-54.11 54.11v31.223h108.223z' />
    <circle cx={192.215} cy={211.178} r={20.687} fill='#ffc61b' />
  </svg>
)

export default SvgComponent
