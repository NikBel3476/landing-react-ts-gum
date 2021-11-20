import React from 'react';
import clsx from 'clsx';

import Header from "./Header";
import IntroContent from "./IntroContent";

import styles from './Intro.module.css';

type IntroProps = {
    className?: string
}

const Intro = (props: IntroProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <Header />
            <IntroContent className={clsx(styles.IntroContent)}/>
        </div>
    );
}

export default Intro;
