import React from 'react'
import style from './Button.module.css'

export default function Button(props) {
    const { additionalStyle, disableBtn = false, buttonText } = props
    return (
        <button style={additionalStyle} disabled={disableBtn} className={style.only_button}>{buttonText}</button>
    )
}
