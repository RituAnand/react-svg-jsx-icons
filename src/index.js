import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icons from './SVG_Icons'

export default class ExampleComponent extends Component {
  static propTypes = {
    name: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    fill: PropTypes.string
  }

  render() {
    const {
      name,
      height,
      width,
      color,
      size,
      fill
    } = this.props

    return (
      <div >
        <Icons height={height} width={width} name={name} color={color} size={size} fill={fill} />
      </div>
    )
  }
}
