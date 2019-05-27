import React, { Component } from 'react'

import Icon from 'react-svg-jsx-icons'

export default class App extends Component {
  render () {
    return (
      <div>
        <Icon name={'world'}  fill={'red'}/>
        <Icon name={'wifi'} height={'1.5%'} width ={'1.5%'} color ={'blue'} size={'4%'} fill={'red'} />
        <Icon name={'water'}  size={'5%'} />
        <Icon name={'warning'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
      </div>
    )
  }
}
