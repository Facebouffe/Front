import Styles from './Button.module.scss';
import * as React from "react";

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
    extends React.ComponentPropsWithoutRef<'button'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'medium',
            children,
            className,
            ...props
        }, ref
) => {
        const buttonClasses = `${Styles.Button} 
        ${Styles[`Button-${variant}`]} 
        ${Styles[`Button-${size}`]}`;
        return (
            <button
                ref={ref}
                className={buttonClasses}
            {...props}>
                {children}
        </button>
        )
    }
);

const MemoButton = React.memo(Button);

MemoButton.displayName = 'Button';

export default MemoButton

/*export function Button({ children }: React.PropsWithChildren<{}>) {
    return <button className={Styles.Button}>{children}</button>;
}*/