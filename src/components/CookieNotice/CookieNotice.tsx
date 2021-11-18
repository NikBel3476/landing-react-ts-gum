import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './CookieNotice.module.css';

type CookieNoticeProps = {
    className?: string
}

const CookieNotice = (props: CookieNoticeProps): React.ReactElement | null => {
    const { className } = props;
    const [isShown, setIsShown] = useState<boolean>(true);

    const handleButtonClick = () => {
        if (isShown) setIsShown(false);
    }

    if (isShown) {
        return (
            <div className={clsx(className ? className : styles.container)}>
                <p className={clsx(styles.text)}>We use cookies to enhance your experience on our website. By using our website, you agree to our privacy policy.</p>
                <a className={clsx(styles.link)} href={"#top"}>Learn more</a>
                <button className={clsx(styles.button)} onClick={handleButtonClick}>GOT IT</button>
            </div>
        );
    }
    return null;
}

export default CookieNotice;
