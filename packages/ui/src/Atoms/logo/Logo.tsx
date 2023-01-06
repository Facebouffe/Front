import logoFacebouffe from './logo.svg'
import Styles from './Logo.module.scss'
import * as React from "react";

type LogoSize = 'small' | 'medium' | 'large'
type LogoVariant = 'grey' | 'white'

export interface LogoProps
    extends React.ComponentPropsWithoutRef<'img'> {
    size?: LogoSize;
    children?: React.ReactNode ;

    variant?: LogoVariant;
}
export const Logo=React.forwardRef<HTMLImageElement,LogoProps>(
    (
        {
            size = 'medium',
            variant= 'grey'
        }, ref
    )=>{
        const logoClasses = `${Styles.Logo} 
        ${Styles[`Logo-${size}`]} 
        ${Styles[`Logo-${variant}`]}`;

        return(
            <img className={logoClasses} src={logoFacebouffe} alt={"Logo"}/>
        )
    }
)
const MemoLogo = React.memo(Logo);

MemoLogo.displayName = 'Logo';

export default MemoLogo


// export function Logo ():any{
//     return <img src={logo} alt={logo}/>
// }