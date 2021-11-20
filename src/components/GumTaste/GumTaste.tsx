import React from 'react';
import clsx from 'clsx';

import styles from './GumTaste.module.css';

type GumTasteProps = {
    className?: string,
    type: 'peppermint' | 'ginger_chai'
}

const GumTaste = (props: GumTasteProps): React.ReactElement => {
    const { className, type } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <div className={clsx(type === 'peppermint' ? styles.blue : styles.brown, styles.square)}></div>
            <div className={clsx(type === 'peppermint' ? styles.red : styles.orange, styles.square)}></div>
            <p className={clsx(styles.text)}>{type === 'peppermint' ? 'Peppermint' : 'Ginger Chai'}</p>
        </div>
    );
}

export default GumTaste;
