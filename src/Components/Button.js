import React from 'react'
import style from './Button.module.css'

export default function Button(props) {
    return (
        <button className={style.only_button}>{props.buttonText}</button>
    )
}
