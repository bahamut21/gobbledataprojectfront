import React, { Component } from 'react';
import Board from './Board';
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      email: "",
            mdp: "MonMotDePasse",
            mdpStars: "",
            starsCounter: [],
    };
    this.toggle = this.toggle.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

    toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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

    // add fetch to POST in BDD
    handleSubmit = () => {
      console.log('toto');
    }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }






    const  { email, mdp } = this.state;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
            <div className="Share">
              
                <Button className="email-btn" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <h6>Connectez-vous à votre compte Gmail pour le partager avec vos amis!</h6>
            <Input value={email} name="email" placeholder="Email" onChange={this.handdleOnChange} />
                <Input value={this.state.mdpStars} name="mdp" onChange={this.handlePasswordChange} placeholder="Mot de passe" />
                <Button><Link to="/tips">Valider</Link></Button>
          </ModalBody>
        </Modal>
            </div>
      </div>
    );
  }
}

// ========================================


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;