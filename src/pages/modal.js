/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import {SimpleLink, SocialLinks } from '../blocks'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  _handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 27:
        this.closeModal();
        break;
      default:
        break;
    }
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this._handleKeyDown);
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  openModal = () => {
    this.setState({showModal: true});
    trackCustomEvent({ category: "hireMeBtn", action: "Click"});
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  handleClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      this.closeModal();
    }
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
        }} onClick={this.handleClick} className='modal-overlay'
          role='button'
          tabIndex='-1'
        >
            <div sx={{
              padding: '20px',
              paddingBottom: 0,
              backgroundColor: 'text',
              color: 'background',
              width: '85%',
              maxWidth: '630px',
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '16px',
            }}>
              <span sx={{
                fontSize: '10px',
                position: 'absolute',
                top: '2px',
                right: '5px',
                cursor: 'pointer'
              }} onClick={this.closeModal} role='button' tabIndex='-1'>close</span>
            Hi! <br /> <br />
            I'm actively exploring new job opportunities as a <span sx={{ color: 'highlight' }}>full stack/backend</span> software developer. I would love to work in a <span sx={{ color: 'highlight' }}>remote-first</span> company.<br/><br/>
            I have used <span sx={{ color: 'highlight' }}>Ruby on Rails, NodeJs, JavaScript, React</span> to build apps before. I'm quick to learn new technologies when I need them. <br/><br/>

            <a href='/resume.pdf'
              download="Viraj Chavan Resume"
              sx={{fontSize: '13px', textDecoration: 'underline !important'}}
              onClick={e => {
                trackCustomEvent({ category: "resumeDownloadBtn", action: "Click" });
              }} >
              Here's my resume.
            </a> &nbsp;
            <span sx={{ fontSize: '13px'}}>Also take a look around this site to get more insights.</span>
            <br/><br/>

            You can email me on <a href='mailto:virajc@live.com' target='_blank' rel="noopener noreferrer">virajc@live.com</a>

            <SocialLinks sx={{paddingBottom: 0}} />
            </div>
          </div>
        }
        <div className={this.state.showModal ? 'blur' : ''}>
          <SimpleLink onClick={this.openModal}>Are you hiring?</SimpleLink>
          {this.props.children}
        </div>
    </div>
    )
  }
}

export default Modal;
