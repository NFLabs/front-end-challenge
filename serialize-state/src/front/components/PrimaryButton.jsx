import React, { Component } from 'react';

class PrimaryButton extends Component {
  render() {
    const buttonType = this.props.buttonType || 'button';
    const label = this.props.label || 'label';
    
    return (
      <button type={buttonType}>{label}</button>
    );
  }
}

export default PrimaryButton;
