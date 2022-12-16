import Styles from "./Button.module.scss";
import { PropsWithChildren } from "react";

export function Button({ children }: PropsWithChildren<{}>) {
    return <button className={Styles.Button}>{children}</button>;
}
