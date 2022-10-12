import React from 'react'
import style from './FormHeading.module.css'
export default function FormHeading(props) {
    return (
        <div className={style.form_heading}>
            <h1>{props.firstHeading}</h1>
            <h5>{props.secondHeading}</h5>
        </div>
    )
}
