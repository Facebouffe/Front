import logo from './logo.svg'
import Styles from './Logo.module.scss'
import * as React from "react";

type LogoSize = 'small' | 'medium' | 'large'

export interface LogoProps
    extends React.ComponentPropsWithoutRef<'img'> {
    size?: LogoSize;
    children?: React.ReactNode ;
}
export const Logo=React.forwardRef<HTMLImageElement,LogoProps>(
    (
        {
            size = 'medium',
        }, ref
    )=>{
        const logoClasses = `${Styles.Logo} 
        ${Styles[`Logo-${size}`]}`;

        return(
            <img className={logoClasses} src={logo} alt={logo}/>
        )
    }
)
const MemoLogo = React.memo(Logo);

MemoLogo.displayName = 'Logo';

export default MemoLogo


// export function Logo ():any{
//     return <img src={logo} alt={logo}/>
// }