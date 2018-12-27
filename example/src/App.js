import React, { Component } from 'react'

import Evacon from 'react-evacon'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>React Evacon</h2>
        <div>
          <Evacon fill="red" type="github" style={{verticalAlign: 'middle'}}/>
          <Evacon type="alert-circle-outline"/>
        </div>
      </div>
    )
  }
}
