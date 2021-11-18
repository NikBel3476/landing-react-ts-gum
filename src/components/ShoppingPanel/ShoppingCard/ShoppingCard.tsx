import React from 'react';
import clsx from 'clsx';

import Button from "../../Button";

import styles from './ShoppingCard.module.css'
import { CardColor } from "./types/CardColor";

type ShoppingCardProps = {
    className?: string,
    color: CardColor,
    image: string,
    text: string,
}

const MAPPED_CARD_COLORS: Record<CardColor, string> = {
    blue: styles.blue,
    beige: styles.beige,
    light_green: styles.light_green
}

const ShoppingCard = (props: ShoppingCardProps): React.ReactElement => {
    const { className, color, image, text } = props;

    return (
        <div className={clsx(className ? className : styles.container, MAPPED_CARD_COLORS[color])}>
            <img className={clsx(styles.image)} src={image} alt={"Option logo"}/>
            <p className={clsx(styles.text)}>{text}</p>
            <Button type={'white'} size={'small'} text={'SHOP NOW'} />
        </div>
    );
}

export default ShoppingCard;
