import React from 'react';
import clsx from 'clsx';

import PageContent from "../PageContent";

import styles from './CalmAndClarity.module.css';
import CalmAndClarityImg from '../../assets/CalmAndClarity/CalmAndClarity.png';
import GumTaste from "../GumTaste";
import Button from "../Button";

type CalmAndClarityProps = {
    className?: string
}

const CalmAndClarity = (props: CalmAndClarityProps): React.ReactElement => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <PageContent
                className={clsx(styles.page_content)}
                title={'Calm'}
                subTitle={'& Clarity'}
                text={'Expertly developed with GABA, vitamin D3, and L-theanine to optimize composure and clarity of mind.*'}
                color={'beige'}
                titleBoldify={false}
            >
                <GumTaste className={clsx(styles.gum_taste)} type={'ginger_chai'} />
                <Button className={clsx(styles.button)} type={'transparent'} size={'big'} text={'SHOP'} />
            </PageContent>
            <img src={CalmAndClarityImg} alt={'Calm and clarity'}/>
        </div>
    );
}

export default CalmAndClarity;
