import React, { Component } from 'react'

import ReactPlayer from 'react-player'
 
class Player extends Component {
  render () {
    return <ReactPlayer url='https://youtu.be/Bc3ODZinOy0?t=74' playing />
  }
}
export default Player;