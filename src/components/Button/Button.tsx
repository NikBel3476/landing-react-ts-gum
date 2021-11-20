import React from 'react';
import clsx from "clsx";

import styles from './Button.module.css';

import { ButtonType } from "./types/ButtonType";
import { ButtonSize } from "./types/ButtonSize";

type ButtonProps = {
    className?: string,
    type: ButtonType,
    size: ButtonSize,
    text: string
}

const MAPPED_BUTTON_TYPES: Record<ButtonType, string> = {
    white: styles.white,
    black: styles.black,
    transparent: styles.transparent
}

const MAPPED_BUTTON_SIZES: Record<ButtonSize, string> = {
    big: styles.big,
    small: styles.small
}

const Button = (props: ButtonProps): React.ReactElement => {
    const { className, type, size, text } = props;

    return (
        <button className={clsx(styles.button, className, MAPPED_BUTTON_TYPES[type], MAPPED_BUTTON_SIZES[size])}>{text}</button>
    );
}

export default Button;
