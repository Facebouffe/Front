import {MdOutlineHome, MdRestaurant} from 'react-icons/md';
import {Divider} from "../../../Atoms/Divider/Divider";
import React from "react";
import Styles from './UserNavigation.module.scss'

export const UserNavigation = () => {
    return (
        <div className={Styles.UserNavigation}>
            <a href={"/"}><MdOutlineHome size={50} color={"white"}/></a>
            <Divider orientation={"vertical"}></Divider>
            <a href={"/about"}><MdRestaurant size={50} color={"white"}></MdRestaurant></a>
        </div>
    )
}

