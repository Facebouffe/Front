import Styles from "./Forms.module.scss";
import * as React from "react";

type FormsSize = 'small' | 'medium' | 'large'
type FormsVariant = 'primary' | 'secondary' | 'tertiary';

// @ts-ignore
export interface FormsProps
    extends React.ComponentPropsWithoutRef<'text'> {
    variant?: FormsVariant;
    size?: FormsSize;
    children?: React.ReactNode;
}

// export type FormsProps = React.ComponentPropsWithoutRef<'textarea'> &
//     React.ComponentPropsWithoutRef<'input'> &
//     FormsProps;

export const Forms = React.forwardRef<HTMLTextAreaElement & HTMLInputElement, FormsProps>(
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
                <text
                  ref={ref}
                  className={formsClasses}
                  {...props}>
                {children}
            </text>
        )
    }
);

const MemoForms = React.memo(Forms);

MemoForms.displayName = 'Forms';

export default MemoForms


// export function Forms ({children}:any) {
//     return    <input className={Styles.Forms} placeholder={children}/>
// }