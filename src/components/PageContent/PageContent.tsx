import React from 'react';
import clsx from 'clsx';

import styles from './PageContent.module.css';

type PageContentProps = {
    className?: string,
    children?: React.ReactNode | React.ReactNode[],
    title: string,
    text: string,
    color?: string
}

const PageContent = (props: PageContentProps): React.ReactElement => {
    const { className, title, text, children, color } = props;

    return (
        <div className={clsx(className ? className : styles.container)}>
            <p className={clsx(styles.title)}>{title}</p>
            <p className={clsx(styles.text)}>{text}</p>
            {children}
        </div>
    );
}

export default PageContent;
