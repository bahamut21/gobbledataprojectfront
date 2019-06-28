import React, { Component } from 'react';
import './Tips.css'

class Tips extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="Tips">
        <div class="row container odd">
          <img className="col-4 icon" src='/assets/icons/warning.png' alt='warning' />
          <h5 className="col-8"> Vérifier les emails avec prudence </h5>
          <h6 className="col-12">Les phishers sont extrêmement doués pour ce qu'ils font. Ce n’est pas parce qu’un courrier électronique contient des
            logos de marque convaincants, une langue et une adresse électronique apparemment valide qu’il est légitime. Restez sceptique
          quand il s’agit de vos messages électroniques: s’ils semblent lointains, ne les ouvrez pas.</h6>
        </div>

        <div class="row container even">
          <img className="col-4 icon" src='/assets/icons/links.png' alt='links' />
          <h5 className="col-8">Liens: Regarde mais ne clique pas</h5>
          <h6 className="col-12">Passez votre souris sur les liens incorporés dans le corps de l'e-mail. Si l'adresse du lien semble étrange,
            ne cliquez pas dessus. Si vous souhaitez tester le lien, ouvrez une nouvelle fenêtre et saisissez directement l'adresse du
          site Web plutôt que de cliquer sur le lien dans la liste des courriels non sollicités.</h6>
        </div>

        <div class="row container odd">
          <img className="col-4 icon" src='/assets/icons/update.png' alt='update' />
          <h5 className="col-8"> Gardez votre logiciel à jour </h5>
          <h6 className="col-12">Ces mises à jour logicielles et OS compliquées sont non seulement importantes du point de vue de la fonctionnalité,
            mais elles contiennent le plus souvent des mises à jour de sécurité critiques et des correctifs de vulnérabilité.
            Si possible, activez les mises à jour logicielles automatiques. Et oui, c’est un conseil que les professionnels de
          la sécurité entendront encore et encore.</h6>
        </div>

        <div class="row container even">
          <img className="col-4 icon" src='/assets/icons/payment.png' alt='payment' />
          <h5 className="col-8"> Quand on vous demande de payer</h5>
          <h6 className="col-12">C'est un gros code rouge. C’est très souvent pour une très petite quantité, ce qui donne l’impression que ce n’est
             pas très risqué. Mais les fraudeurs essaient vraiment d’obtenir les données de votre carte de crédit pour pouvoir
             effectuer d’autres achats. En France, le consommateur est protégé pour tous les paiements par carte de crédit et il
            appartient à la Banque de reconnaître la fraude. Mais il est toujours très difficile de récupérer de l'argent volé.</h6>
        </div>
      </div>
    );
  }
}

export default Tips;
