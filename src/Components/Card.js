import React from 'react'
import style from "./Card.module.css"
export default function Card(props) {
    const { image, Heading, Text, onPressCard, selectedCard } = props
    return (
        <div onClick={() => { onPressCard(Heading) }} style={{ borderColor: selectedCard === Heading ? 'rgb(102, 76, 230)' : 'rgb(224, 219, 219)' }} className={style.card} role="button">

            <div className={style.card_icon}>{image}</div>
            <div className={style.card_heading}><h4>{Heading}</h4></div>
            <div className={style.card_text}>{Text}</div>

        </div>
    )
}
