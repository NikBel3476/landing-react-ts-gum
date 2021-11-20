import React from 'react';
import clsx from 'clsx';

import styles from './Science.module.css';

type ScienceProps ={
    className?: string
}

const Science = (props: ScienceProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>

        </div>
    );
}

export default Science;
