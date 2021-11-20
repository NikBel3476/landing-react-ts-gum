import React from 'react';
import clsx from 'clsx';

import styles from './Prefooter.module.css';

type PrefooterProps = {
    className?: string
}

const Prefooter = (props: PrefooterProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <p className={clsx(styles.title)}>Doing more with Neuro?</p>
            <p className={clsx(styles.text)}>Share what you’ve accomplished with Neuro in your pocket and in your corner. <span>Tag @neurogum</span></p>
        </div>
    );
}

export default Prefooter;
