import React from 'react';
import clsx from 'clsx';

import PageContent from "../PageContent";
import Button from "../Button";

import styles from './IdealState.module.css';
import IdealStateImg from '../../assets/TheIdealState/TheIdealState.png';

type IdealStateProps = {
    className?: string
}

const IdealState = (props: IdealStateProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <img className={clsx(styles.image)} src={IdealStateImg} alt={'The ideal state'}/>
            <PageContent
                className={clsx(styles.page_content)}
                title={'The Ideal State'}
                text={'Some days, getting in the zone requires a boost – other days, we need to take it down a notch. Balance the ups and downs of your ambition with a combo pack of Energy & Focus and Calm & Clarity.'}
                color={'black'}
                titleBoldify={false}
            >
                <Button className={clsx(styles.button)} type={'transparent'} size={'big'} text={'SHOP NOW'} />
            </PageContent>
        </div>
    );
}

export default IdealState;
