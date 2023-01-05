import Styles from './Header.module.scss';
import * as React from "react";
import {Logo} from "../../Atoms/logo/Logo";
import {UserNavigation} from "../../Molecules/User/UserNavigation/UserNavigation";
import {MdMenu} from "react-icons/md"

type HeaderVariant = 'user' | 'restaurant' | 'deliverer';

export interface HeaderProps {
    variant: HeaderVariant
}

export const Header = ({
    variant = "user"
    }:HeaderProps) => {
    return (
        <div className={Styles.Header}>
            <Logo size={"large"}/>
            <div className={Styles.HeaderNavigation}>
                {variant === "user" ? <UserNavigation/> : <UserNavigation/>}
            </div>
            <MdMenu className={Styles.HeaderLogo}></MdMenu>
        </div>
    )
}

const MemoHeader = React.memo(Header);

MemoHeader.displayName = 'Button';

export default  MemoHeader