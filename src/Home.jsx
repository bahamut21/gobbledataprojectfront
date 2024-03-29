import React, { Component } from 'react';
import arrow from './assets/grunge-arrow-2-1-1024x823.png';
import backgroundImage from './assets/computer.jpg';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="Home">
        <img className="arrow" src={arrow} alt='Array[k]' />
        <img className="bg-image" src={backgroundImage} alt='Array[k]'/>
        <div className="Mobile" onClick={this.toggle}>{this.props.buttonLabel}</div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Mail</ModalHeader>
          <ModalBody>
            <p className="message">
              Hey Martin ! <br/>
              Tu connais ce nouveau jeu ? <br/>
              Il fait gagner des millions d'euros avec des compétitions en ligne! <br/>
              Clique sur ce lien !!

            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Link</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Home;