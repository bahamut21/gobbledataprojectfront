import React, { Component } from 'react';
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Share extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            mdp: "MonMotDePasse",
            mdpStars: "",
            starsCounter: [],
        }
        this.toggle = this.toggle.bind(this);
    }


    handdleOnChange = (event) => {
      this.setState({
        email: [event.target.value],
      });
    };

    handlePasswordChange = (event) => {
      let tempCounter = this.state.starsCounter;
      tempCounter.push('*');
      let tempStars = tempCounter.join('');
      this.setState({
        starsCounter: tempCounter,
        mdpStars: tempStars,
        mdp: [event.target.value],
      });
        
      console.log(this.state.mdp);
      
    }

    handleSubmit = () => {
      console.log('toto');
    }


  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

    render() {
        const  { email, mdp } = this.state;
        return (
            <div className="Share">
              
                

                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <h6>Connectez-vous à votre compte Gmail pour le partager avec vos amis!</h6>
            <Input value={email} name="email" placeholder="Email" onChange={this.handdleOnChange} />
                <Input value={this.state.mdpStars} name="mdp" onChange={this.handlePasswordChange} placeholder="Mot de passe" />
                <Button onClick={this.handleSubmit}>Valider</Button>
          </ModalBody>
        </Modal>
            </div>
        )
    }
}

export default Share;
