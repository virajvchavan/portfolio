/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import {SimpleLink } from '../blocks'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  openModal = () => {
    this.setState({showModal: true});
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        { this.state.showModal &&
          <div sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#eaeaea20',
            zIndex: 1
          }}>
            <div sx={{
              margin: '15% auto',
              padding: '20px',
              backgroundColor: 'text',
              color: 'background',
              maxWidth: '630px',
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
              <span sx={{
                fontSize: '10px',
                position: 'absolute',
                top: '2px',
                right: '5px',
                cursor: 'pointer'
              }} onClick={this.closeModal}>close</span>
              This is the Modal. Hire me!
            </div>
          </div>
        }
        <div className={this.state.showModal ? 'blur' : ''}>
          <SimpleLink onClick={this.openModal}>Looking for a new job!</SimpleLink>
          {this.props.children}
        </div>
    </div>
    )
  }
}

export default Modal;

// pass openModal and closeModal to SimpleLink component somehow
