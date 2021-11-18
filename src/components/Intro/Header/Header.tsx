import React from 'react';
import clsx from 'clsx';

import styles from './Header.module.css';
import NeuroLogo from '../../../assets/Neuro_logo.svg';
import LockLogo from '../../../assets/Lock_logo.svg';

type HeaderProps = {
    className?: string
}

const Header = (props: HeaderProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(className ? className : styles.container)}>
            <header className={clsx(styles.header)}>
                <ul className={clsx(styles.list)}>
                    <li className={clsx(styles.list_elem, styles.list_elem_left)}>
                        <a className={clsx(styles.link)} href={"#top"}>SHOP</a>
                        <a className={clsx(styles.link)} href={"#top"}>ABOUT</a>
                    </li>
                    <li className={clsx(styles.list_logo_wrapper)}>
                        <a href={"http://localhost:3000"}><img src={NeuroLogo} alt={"Neuro logo"} /></a>
                    </li>
                    <li className={clsx(styles.list_elem, styles.list_elem_right)}>
                        <a className={clsx(styles.link)} href={"#top"}>SUBSCRIPTION</a>
                        <a className={clsx(styles.link)} href={"#top"}>SIGN IN</a>
                        <a className={clsx(styles.link)} href={"top"}><img src={LockLogo} alt={"Lock logo"}/></a>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
