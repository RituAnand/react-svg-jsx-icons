import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z" />
    <path fill="#a2001d" d="M0 85.337h512v113.775H0z" />
    <path d="M0 312.888h512v113.775H0z" />
    <g fill="#496e2d">
      <path d="M219.186 246.069c-.083 0-.165.006-.248.007v-.007H189.83c1.476-5.702 6.649-9.931 12.806-9.931v-19.863c-18.254 0-33.103 14.85-33.103 33.103v16.551H219.188a3.314 3.314 0 0 1 3.31 3.31v6.62H156.29v19.862h86.069V269.24c0-12.776-10.395-23.171-23.173-23.171zM268.841 275.862v-59.587H248.98v79.449h33.103v-19.862zM335.048 275.862v-59.587h-19.862v59.587h-6.62v-19.861h-19.863v39.723h59.587v-19.862z" />
    </g>
  </svg>
)

export default SvgComponent
