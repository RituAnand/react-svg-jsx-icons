# react-svg-jsx-icons

> Easy use of icons anywhere in the react web development

[![NPM](https://img.shields.io/npm/v/react-svg-jsx-icons.svg)](https://www.npmjs.com/package/react-svg-jsx-icons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-svg-jsx-icons
```

## Usage

```jsx
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
        <Icon height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
      </div>
    )
  }
}

```

## License

MIT © [RituAnand](https://github.com/RituAnand)
