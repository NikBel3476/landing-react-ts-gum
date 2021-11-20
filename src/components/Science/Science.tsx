import React from 'react';
import clsx from 'clsx';

import PageContent from "../PageContent";
import Link from "../Link";

import styles from './Science.module.css';
import BubblesImg from '../../assets/Science/Bubbles.png';

type ScienceProps ={
    className?: string
}

const Science = (props: ScienceProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <PageContent
                className={clsx(styles.page_content)}
                title={'There’s a science'}
                subTitle={'to the science.'}
                text={'We have gone through dozens of formulations, processes and tests to ensure each gum and mint we make delivers on our promise of getting you in the right state at the right time.'}
                color={'white'}
                titleSize={'normal'}
                titleBoldify={false}
            >
                <div className={clsx(styles.link_wrapper)}>
                    <Link className={clsx(styles.link)} text={'How we do it'} url={'#top'} />
                </div>
            </PageContent>
            <img className={clsx(styles.image)} src={BubblesImg} alt={'Bubbles'} />
        </div>
    );
}

export default Science;
