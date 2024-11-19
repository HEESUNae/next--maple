import {ReactNode} from "react";
import styles from './button-basic.module.css';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

export function Button({children, onClick, ...rest}:ButtonProps){
    return (
        <button className={styles.basicButton} onClick={onClick}>{children}</button>
    )
}