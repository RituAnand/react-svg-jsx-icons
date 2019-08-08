# react-svg-jsx-icons

> Easy use of icons anywhere in the web development (especially react).
> Fast rendering of icons in the application (beause All SVGIcons are converted to jsx before using.)
> There are icons of All country flags.


[![NPM](https://img.shields.io/npm/v/react-svg-jsx-icons.svg)](https://www.npmjs.com/package/react-svg-jsx-icons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install  

```bash
npm install --save react-svg-jsx-icons

yarn add react-svg-jsx-icons
```
## props

    name: PropTypes.string
    height: PropTypes.string
    width: PropTypes.string
    color: PropTypes.string
    size: PropTypes.string
    fill: PropTypes.string

## Usage 1. Individually rendering icons

```jsx
import React, { Component } from 'react'

import Icon from 'react-svg-jsx-icons'

export default class Icons extends Component {
  render () {
    return (
      <div>
        <Icon name={'world'} height={'5%'} width={'5%'} fill={'red'}/>
        <Icon name={'wifi'} height={'5%'} width ={'5%'} color ={'blue'} size={'4%'} fill={'red'} />
        <Icon name={'water'}  size={'5%'} />
        <Icon name={'warning'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
      </div>
    )
  }
}

```
> A file(SVGCountryFlags.js) with all the CountryFlags which contians the array of CountryFlags(Icon), CountryName and Country Code.
> It can be imported and used as following example to reducing number of lines of code.

## Usage 2. Collectively rendering All Country Flags

```jsx
import React, { Component } from 'react'

import Icon from 'react-svg-jsx-icons'
import {CountryFlags} from 'react-svg-jsx-icons'

export default class CountryFlags extends Component {
  render () {
    return (
      <div>
        {
          CountryFlags.map((item,index)=>(
            <div style={{display:'flex',flexDirection:'row'}}>
              <Icon name={item.Name}  height={'5%'} width={'5%'} />
              <div>{item.Country}</div>
              <div>{item.CountryCode}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

```

## License

MIT © [RituAnand](https://github.com/RituAnand)
