import Styles from './Accueil_restaurant_buttons.module.scss'
import * as React from "react";
import {Button} from "../../../Atoms/atoms";

export const Accueil_restaurant_buttons = () => {
    return (
        <div className={Styles.Accueil_restaurant_buttons}>
            <Button variant="primary" size="medium">J'AIME</Button>
            <Button variant="primary" size="medium">COMMENTAIRES</Button>
            <Button variant="tertiary" size="medium">COMMANDER</Button>
        </div>
    )
}