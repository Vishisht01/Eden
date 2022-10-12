import React from 'react'
import style from './FormOne.module.css'
import { Link } from "react-router-dom";
export default function FormOne(props) {
    return (
        <div className={style.form_container}>
            <form>
                <label className={style.name_label}>{props.label1}</label>
                <input className={style.name_input} type="text" id="fname" placeholder={props.placeholder1}></input>
                <label className={style.name_label}>{props.label2}</label>
                <input className={style.name_input} type="text" id="fname" placeholder={props.placeholder2}></input>
                <Link to="Workspace"><button className={style.only_button}>{props.buttonText}</button></Link>
            </form>
        </div>
    )
}
