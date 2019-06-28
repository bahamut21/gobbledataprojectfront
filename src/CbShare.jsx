import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './CbShare.scss'

function CbShare() {
    return (
        <div className="CbShare">
            <p>
                Tu as dépensé tout tes crédit ! Veux tu acheter des crédits ou partager à tes amis ?
            </p>
            <div className="buttons">
                <Button>Acheter</Button>
                <NavLink to='/share'>
                    <Button>Partager</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default CbShare;
