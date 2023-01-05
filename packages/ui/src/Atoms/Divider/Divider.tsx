import Styles from "./Divider.module.scss";
import React from "react";

type DividerOrientation = 'horizontal' | 'vertical';
export interface DividerProps
    extends React.ComponentPropsWithoutRef<'div'> {
    orientation?: DividerOrientation;
}
export const Divider = ({
    orientation = 'horizontal',
    ...props
    }:DividerProps) => {
    const DividerClass = `${Styles.Divider}  
        ${Styles[`Divider-${orientation}`]}`;
    return <div className={DividerClass}
        aria-orientation={orientation}>
    </div>
}

const  MemoDivider = React.memo(Divider);

MemoDivider.displayName = 'Divider';

export default MemoDivider;