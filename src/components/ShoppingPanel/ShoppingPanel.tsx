import React from 'react';
import clsx from 'clsx';

import ShoppingCard from "./ShoppingCard";

import styles from './ShoppingPanel.module.css';
import GraphImg from '../../assets/ShoppingPanel/Graph.png';
import SunRaysImg from '../../assets/ShoppingPanel/Sun_rays.svg';
import SunsetImg from '../../assets/ShoppingPanel/Sunset.svg';
import SunRaysWithSunsetImg from '../../assets/ShoppingPanel/Sun_rays_with_sunset.svg';
import WaveImg from '../../assets/ShoppingPanel/Wave.svg';

type ShoppingPanelProps = {
    className?: string
}

const ShoppingPanel = (props: ShoppingPanelProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <div className={clsx(styles.rectangle)}></div>
            <p className={clsx(styles.title)}>We get the mental game</p>
            <p className={clsx(styles.text)}>
                That’s why we create products to help shift your mindset with ease and flow.
                Our functional gum and mints are shortcuts to the ideal state of mind, delivering just
                the right amount of what you need to energize, calm and focus your mind in the moment.
            </p>
            <img className={clsx(styles.image)} src={GraphImg} alt={"Graph"}/>
            <p className={clsx(styles.subtitle)}>Shop by function</p>
            <p className={clsx(styles.subtitle_text)}>Find the right products for any situation.</p>
            <div className={clsx(styles.cards_wrapper)}>
                <ShoppingCard color={'blue'} image={SunRaysImg} text={'Energy & Focus'} />
                <ShoppingCard color={'beige'} image={SunsetImg} text={'Calm & Clarity'} />
                <ShoppingCard color={'light_green'} image={SunRaysWithSunsetImg} text={'Ideal State'} />
            </div>
            <div className={clsx(styles.wave_images_wrapper)}>
                <img className={clsx(styles.wave_image, styles.wave_image_mirrored)} src={WaveImg} alt={"Wave"} />
            </div>
        </div>
    );
}

export default ShoppingPanel;
