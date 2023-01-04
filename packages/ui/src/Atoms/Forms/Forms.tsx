import Styles from "./Forms.module.scss";
import * as React from "react";

type FormsSize = 'small' | 'medium' | 'large'
type FormsVariant = 'primary' | 'secondary' | 'tertiary';

// @ts-ignore
export interface FormsProps
    extends React.ComponentPropsWithoutRef<'input'> {
    variant?: FormsVariant;
    size?: FormsSize;
    children?: React.ReactNode ;
}

// export type FormsProps = React.ComponentPropsWithoutRef<'textarea'> &
//     React.ComponentPropsWithoutRef<'input'> &
//     FormsProps;

export const Forms = React.forwardRef<HTMLInputElement & HTMLFormElement, FormsProps>(
    (
        {
            variant = 'primary',
            size = 'medium',
            children,
            className,
            ...props
        }, ref
    ) => {
        const formsClasses = `${Styles.Forms} 
        ${Styles[`Forms-${variant}`]} 
        ${Styles[`Forms-${size}`]}`;


        return (
            <form >
                <input
                    ref={ref}
                    // @ts-ignore
                    className={formsClasses} placeholder={children}
                    {...props}  />
            </form>
        )
    }
);

const MemoForms = React.memo(Forms);

MemoForms.displayName = 'Forms';

export default MemoForms


// export function Forms ({children}:any) {
//     return    <input className={Styles.Forms} placeholder={children}/>
// }