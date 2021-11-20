import React from 'react';
import clsx from 'clsx';

import PageContent from "../PageContent";
import Link from "../Link";

import styles from './OurMission.module.css';
import HandImg from '../../assets/OurMission/Hand.png';
import WaveImg from '../../assets/OurMission/Wave.svg';

type OurMissionProps = {
    className?: string
}

const OurMission = (props: OurMissionProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <img className={clsx(styles.image)} src={HandImg} alt={'Hand'} />
            <PageContent
                className={clsx(styles.page_content)}
                title={'Our Mission'}
                text={'We started Neuro out of a desire to do more and become the best versions of ourselves.'}
                color={'black'}
                titleSize={'normal'}
                titleBoldify={false}
            >
                <div className={clsx(styles.link_wrapper)}>
                    <Link text={'Our Story'} url={'#top'}/>
                </div>
            </PageContent>
            <div className={clsx(styles.wave_images_wrapper)}>
                <img className={clsx(styles.wave_image, styles.wave_image_mirrored)} src={WaveImg} alt={'Wave'} />
            </div>
        </div>
    );
}

export default OurMission;
