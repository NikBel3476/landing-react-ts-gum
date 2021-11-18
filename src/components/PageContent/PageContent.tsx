import React from 'react';
import clsx from 'clsx';

import styles from './PageContent.module.css';

import { TextColor } from "./types/TextColor";

type PageContentProps = {
    className?: string,
    children?: React.ReactNode | React.ReactNode[],
    title: string,
    text: string,
    color: TextColor
}

const MAPPED_COLOR_TYPES: Record<TextColor, string> = {
    black: styles.black,
    white: styles.white,
    beige: styles.beige,
    light: styles.light
}

const PageContent = (props: PageContentProps): React.ReactElement => {
    const { className, title, text, children, color } = props;

    return (
        <div className={clsx(className ? className : styles.container, MAPPED_COLOR_TYPES[color])}>
            <p className={clsx(styles.title)}>{title}</p>
            <p className={clsx(styles.text)}>{text}</p>
            {children}
        </div>
    );
}

export default PageContent;
