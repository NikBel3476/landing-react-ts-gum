import React from 'react';
import clsx from "clsx";

import styles from './IntroContent.module.css';
import Button from "../../Button";
import PageContent from "../../PageContent";

type IntroContentProps = {
    className?: string
}

const IntroContent = (props: IntroContentProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(className ? className : styles.container)}>
            <PageContent title={'Health in your pocket'} text={'Functional gum and mints to energize, calm and focus you in the moment.'}>
                <Button type={"black"} size={"big"} text={"SHOP"} />
            </PageContent>
        </div>
    );
}

export default IntroContent;
