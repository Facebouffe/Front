import Styles from "./Forms.module.scss";
import {PropsWithChildren} from "react";


export function Forms({children}:any) {
    return    <input className={Styles.Forms} placeholder={children}/>
}