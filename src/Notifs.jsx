import React, { Component } from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  thomasNotification = (type) => {
    return () => {
          NotificationManager.info('Quel est ce jeu que tu m\'as envoyé ??? Mon PC a foiré maintenant !!', 'Thomas', 5000);
    };
  };
  nathalieNotification = (type) => {
    return () => {
          NotificationManager.info('Notre compte joint - VRAIMENT !! Ce sera la dernière fois que vous entendrez parler de moi !!!', 'Nathalie', 5000);
    };
  };
  jeromeNotification = (type) => {
    return () => {
          NotificationManager.info('Nous ne tolérons pas ce type de comportement dans notre entreprise.', 'Jerome (Chef)', 5000);
    };
  };
  mamanNotification = (type) => {
    return () => {
          NotificationManager.info('Ce jeu a l\'air vraiment génial - Merci !!', 'Maman', 5000);
    };
  };

  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.thomasNotification('info')}>Thomas
        </button>
        <hr/>
        <button className='btn btn-info'
          onClick={this.nathalieNotification('info')}>Nathalie
        </button>
        <hr/>
        <button className='btn btn-info'
          onClick={this.jeromeNotification('info')}>Jerome (Chef)
        </button>
        <hr/>
        <button className='btn btn-info'
          onClick={this.mamanNotification('info')}>Maman
        </button>
 
        <NotificationContainer/>
      </div>
    );
  }
}

export default Game;