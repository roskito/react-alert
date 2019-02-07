import React, { Component } from 'react'

export const getStyles = ({ position, zIndex }) => {
  switch (position) {
    case 'top left':
      return {
        position: 'fixed',
        width: '400px',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: 0,
        zIndex
      }
    case 'top right':
      return {
        position: 'fixed',
        width: '400px',
        top: 0,
        right: 0,
        bottom: 'auto',
        left: 'auto',
        zIndex
      }
    case 'bottom left':
      return {
        position: 'fixed',
        width: '400px',
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: 0,
        zIndex
      }
    case 'bottom right':
      return {
        position: 'fixed',
        width: '400px',
        top: 'auto',
        right: 0,
        bottom: 0,
        left: 'auto',
        zIndex
      }
    case 'top center':
      return {
        position: 'fixed',
        width: '400px',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        zIndex
      }
    case 'bottom center':
      return {
        position: 'fixed',
        width: '400px',
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        zIndex
      }
  }
}

class Wrapper extends Component {
  styles = getStyles(this.props.options)

  render() {
    const { children, options, ...props } = this.props

    return (
      <div style={this.styles} {...props}>
        {children}
      </div>
    )
  }
}

export default Wrapper
