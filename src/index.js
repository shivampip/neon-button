import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class NeonButton extends Component {
  state={hover: false}
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  }

  getInitialState= ()=>{
    return {hover: false}
  }
  toggleHover =()=>{
    this.setState({hover: !this.state.hover})
  }

  render() {
    const {
      text, color
    } = this.props

    var linkStyle;
    if (this.state.hover) {
      linkStyle = {color: color}
    } else {
      linkStyle = {color: '#e3e3e3'}
    }

    var boxStyle;
    if (this.state.hover) {
      boxStyle = {boxShadow: `0px 0px 22px 10px ${color}`}
    } else {
      boxStyle = {color: '#e3e3e3'}
    }


    return (
      <button
        className={styles.outerN}
        style={boxStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div
          className={styles.innerN}
          style={linkStyle}
        >{text}</div>
      </button>
    )
  }
}


NeonButton.defaultProps= {
  text: "Enter Button Text",
  color: "#34ebb7"
}

export default NeonButton;
