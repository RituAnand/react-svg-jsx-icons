import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <g fill="#d80027">
      <path d="M0 85.331h512v341.337H0z" />
      <circle cx={256} cy={255.994} r={170.663} />
    </g>
    <path
      fill="#ffda44"
      d="M339.465 255.994l-34.104 16.042 18.161 33.031-37.035-7.085-4.691 37.409L256 307.879l-25.795 27.512-4.693-37.409-37.033 7.083 18.161-33.031-34.105-16.04 34.106-16.04-18.162-33.033 37.031 7.087 4.696-37.41L256 204.111l25.797-27.513 4.69 37.41 37.036-7.087-18.161 33.034z"
    />
    <circle cx={256} cy={255.994} r={51.942} fill="#d80027" />
    <g fill="#ffda44">
      <path d="M230.029 255.994c-1.251 0-2.487.063-3.705.186a29.551 29.551 0 0 0 6.947 18.894 52.064 52.064 0 0 1 10.035-16.614 36.902 36.902 0 0 0-13.277-2.466zM246.017 283.95c3.12 1.114 6.48 1.726 9.983 1.726s6.863-.611 9.983-1.726A37.122 37.122 0 0 0 256 266.634a37.122 37.122 0 0 0-9.983 17.316zM281.702 241.159c-5.132-8.871-14.717-14.845-25.702-14.845s-20.571 5.974-25.704 14.845A51.61 51.61 0 0 1 256 248.143a51.6 51.6 0 0 1 25.702-6.984zM268.695 258.46a52.02 52.02 0 0 1 10.035 16.614 29.555 29.555 0 0 0 6.947-18.894 36.898 36.898 0 0 0-16.982 2.28z" />
    </g>
  </svg>
)

export default SvgComponent