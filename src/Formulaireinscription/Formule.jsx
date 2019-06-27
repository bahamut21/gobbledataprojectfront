import React, {Component}from 'react';
import './Formule.css'
class Formule extends Component {
    constructor(props) {
        super(props);
            this.state = {
                firstname:'nom',
                lastname:'prénom',
                address:'adresse',
                city:'ville',
                telephone:'telephone',
                mobile:'mobile',
                mail:'@',
            }
    this.updatedata = this.updatedata.bind(this);

    }

   updatedata(event){
    this.setState({firstname: event.target.value});
    this.setState({lastname: event.target.lastname});
    this.setState({address: event.target.address});
    this.setState({city: event.target.city});
    this.setState({telephone: event.target.telephone});
    this.setState({mobil: event.target.mobil});
    this.setState({mail: event.target.mail});
   } 
   
   render() {
       return(
          <div className="form">
            <div>
            <input type="firstname" name="firstname" firstname={this.state.firstname} onChange={this.updatedata} placeholder="Ton Nom"/>
                </div>
                <div>
            <input type="lastname" name="lastname" lastname={this.state.lastname} onChange={this.updatedata} placeholder="Ton Prénom"/>
            </div>
             <div>
            <input type="address" name="address" address={this.state.address} onChange={this.updatedata} placeholder="Ton Adresse"/>
            </div>
            <div>
            <input type="city" name="city" city={this.state.city} onChange={this.updatedata} placeholder="Ta Ville"/>
            </div>
            <div>
            <input type="telephone" name="telephone" telephone={this.state.telephone} onChange={this.updatedata} placeholder="Ton Numéro de fixe"/>
            </div>
            <div>
            <input type="mobile" name="mobile" mobile={this.state.mobile} onChange={this.updatedata} placeholder="Ton Numéro de mobile"/>
            </div>
            <div>
            <input type="mail" name="mail" mail={this.state.mail} onChange={this.updatedata} placeholder="Ton adresse mail"/>
            </div>
          </div> 
       )

   }
}

export default Formule;