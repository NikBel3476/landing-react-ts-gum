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
        <div className={clsx(styles.container, className)}>
            <PageContent
                title={'Health in your pocket'}
                text={'Functional gum and mints to energize, calm and focus you in the moment.'}
                color={"white"}
                titleBoldify={true}
            >
                <Button className={clsx(styles.button)} type={"black"} size={"big"} text={"SHOP"} />
            </PageContent>
        </div>
    );
}

export default IntroContent;
