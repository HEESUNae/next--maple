import {ReactNode} from "react";
import styles from './button-basic.module.css';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

export function Button({children, className, onClick, ...rest}:ButtonProps){
    return (
        <button className={className || styles.basicButton} onClick={onClick}>{children}</button>
    )
}