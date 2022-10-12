import React from 'react'
import style from "./Card.module.css"
export default function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.card_icon}>{props.image}</div>
            <div className={style.card_heading}><h4>{props.Heading}</h4></div>
            <div className={style.card_text}>{props.Text}</div>
        </div>
    )
}
