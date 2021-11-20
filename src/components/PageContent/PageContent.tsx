import React from 'react';
import clsx from 'clsx';

import styles from './PageContent.module.css';

import { TextColor } from "./types/TextColor";

type PageContentProps = {
    className?: string,
    children?: React.ReactNode | React.ReactNode[],
    title: string | React.ReactNode,
    subTitle?: string,
    text: string,
    color: TextColor,
    titleBoldify: boolean
}

const MAPPED_COLOR_TYPES: Record<TextColor, string> = {
    black: styles.black,
    white: styles.white,
    beige: styles.beige,
    light: styles.light
}

const PageContent = (props: PageContentProps): React.ReactElement => {
    const { className, title, subTitle, text, children, color, titleBoldify } = props;

    return (
        <div className={clsx(
            styles.container,
            className,
            MAPPED_COLOR_TYPES[color],
            titleBoldify ? styles.bold : styles.normal
        )}>
            <p className={clsx(styles.title)}>{title}</p>
            {subTitle && <p className={clsx(styles.title)}>{subTitle}</p>}
            <p className={clsx(styles.text)}>{text}</p>
            {children}
        </div>
    );
}

export default PageContent;
