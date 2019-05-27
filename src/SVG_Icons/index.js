import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wifi from './wifi'
import World from './world'
import Warning from './warning'
import Water from './water'
import Blur from './blur'

export default class ReturnSvgIcon extends Component {
    static propTypes = {
      name: PropTypes.string,
      height: PropTypes.string,
      width: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.string,
      fill: PropTypes.string
    }

    render () {
      const name = this.props.name ? this.props.name : 'blur'
      const height = this.props.height ? this.props.height : '1.5%'
      const width = this.props.width ? this.props.width : '1.5%'
      const color = this.props.color ? this.props.color : 'black'
      const size = this.props.size ? this.props.size : '5%'
      const fill = this.props.fill ? this.props.fill : 'black'
      switch (name) {
        case 'world':
          return (<World height={height} width={width} color={color} size={size} fill={fill} />)
        case 'wifi':
          return (<Wifi height={height} width={width} color={color} size={size} fill={fill} />)
        case 'warning':
          return (<Warning height={height} width={width} color={color} size={size} fill={fill} />)
        case 'water':
          return (<Water height={height} width={width} color={color} size={size} fill={fill} />)
        default:
          return (<Blur height={height} width={width} color={color} size={size} fill={fill} />)
      }
    }
}
