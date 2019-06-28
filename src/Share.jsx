import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class Share extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            mdp: ""
        }
    }

    handleSubmit = () => {
        config = {
            method: 'POST'
        };

        fetch(`http://localost:3000/api/`)
    }

    render() {
        const  { email, mdp } = this.state;
        return (
            <div className="Share">
                <Input value={email} placeholder="Email" />
                <Input value={mdp} placeholder="Mot de passe" />
                <Button onClick={this.handleSubmit}>Valider</Button>
            </div>
        )
    }
}

export default Share;
