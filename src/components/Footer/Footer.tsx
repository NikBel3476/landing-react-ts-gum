import React from 'react';
import clsx from 'clsx';

import styles from './Footer.module.css';
import Button from "../Button";

type FooterProps = {
    className?: string
}

const Footer = (props: FooterProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <div className={clsx(styles.wrapper)}>
                <p className={clsx(styles.title)}>Refresh your state of mind.</p>
                <Button type={'black'} size={'big'} text={'GET NEURO'} />
            </div>
        </div>
    );
}

export default Footer;
