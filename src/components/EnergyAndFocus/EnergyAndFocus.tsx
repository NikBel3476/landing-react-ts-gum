import React from 'react';
import clsx from 'clsx';

import PageContent from "../PageContent";

import styles from './EnergyAndFocus.module.css';
import EnergyAndFocusImg from '../../assets/EnergyAndFocus/EnergyAndFocus.png';
import WaveImg from '../../assets/EnergyAndFocus/Wave.svg';
import GumTaste from "../GumTaste";
import Button from "../Button";


type EnergyAndFocusBlockProps = {
    className?: string
}

const EnergyAndFocus = (props: EnergyAndFocusBlockProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <img className={clsx(styles.image)} src={EnergyAndFocusImg} alt={'Gum package'}/>
            <PageContent
                className={clsx(styles.page_content)}
                title={'Energy'}
                subTitle={'& Focus'}
                text={'Specially formulated with natural caffeine, L-theanine and B-vitamins to sustain the mental endurance necessary to maintain your focus.*'}
                color={'light'}
                titleSize={'normal'}
                titleBoldify={false}
            >
                <GumTaste className={clsx(styles.gum_taste)} type={'peppermint'} />
                <Button className={clsx(styles.button)} type={'transparent'} size={'big'} text={'SHOP'} />
            </PageContent>
            <div className={clsx(styles.wave_images_wrapper)}>
                <img className={clsx(styles.wave_image, styles.wave_image_mirrored)} src={WaveImg} alt={'Wave'} />
            </div>
        </div>
    );
}

export default EnergyAndFocus;
