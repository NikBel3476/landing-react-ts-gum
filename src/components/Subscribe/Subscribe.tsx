import React from 'react';
import clsx from 'clsx';

import PageContent from "../PageContent";


import styles from './Subscribe.module.css';
import Art from '../../assets/Subscribe/Art.png'
import Button from "../Button";

type SubscribeProps = {
    className?: string
}

const Subscribe = (props: SubscribeProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <img className={clsx(styles.image)} src={Art} alt={'Art'}/>
            <PageContent
                className={clsx(styles.page_content)}
                title={'In the zone. Every day.'}
                text={'Never run out of Neuro with a monthly subscription. Members get 10% off and free shipping straight to your door.'}
                color={'black'}
                titleSize={'normal'}
                titleBoldify={false}
            >
                <Button className={clsx(styles.button)} type={'transparent'} size={'big'} text={'SUBSCRIBE'} />
            </PageContent>
        </div>
    );
}

export default Subscribe;
