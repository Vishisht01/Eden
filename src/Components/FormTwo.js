import React from 'react'
import style from './FormTwo.module.css'
import { Link } from "react-router-dom";
export default function FormTwo(props) {
    return (
        <div className={style.form_container}>
            <form>
                <label className={style.name_label}>{props.label1}</label>
                <input className={style.name_input} type="text" id="fname" placeholder={props.placeholder1}></input>
                <label className={style.name_label}>{props.label2}<span className={style.bracket}>{props.fadedtext}</span></label>
                <div className={style.semi_input}>
                    <input className={style.disabled_input} type="text" id="lname" name="lname" placeholder={props.disabledPlaceholder} disabled></input>
                    <input className={style.semi_name_input} type="text" id="fname" placeholder={props.placeholder2}></input>
                </div>
                <Link to="Card" ><button className={style.only_button}>{props.buttonText}</button></Link>

            </form>

        </div>

    )
}
