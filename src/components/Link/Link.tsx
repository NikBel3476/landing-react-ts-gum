import React from 'react';
import clsx from 'clsx';

import styles from './Link.module.css';

type LinkProps = {
    className?: string,
    text: string,
    url?: string
}

const Link = (props: LinkProps): React.ReactElement => {
    const { className, text, url } = props;

    return (
        <a className={clsx(styles.link, className)} href={url}>{text}</a>
    );
}

export default Link;
