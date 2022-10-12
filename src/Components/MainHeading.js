import React from 'react'
import Icon from '../Images/Icon.png'
import style from './MainHeading.module.css';
export default function Heading(props) {
    return (
        <div className={style.header}>
            <div className={style.header_icon}>
                <img src={Icon} />
            </div>
            <div className={style.header_text}>
                <h1>{props.namehead}</h1>
            </div>
        </div>
    )
}
