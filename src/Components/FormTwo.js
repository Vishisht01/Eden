import React, { useState, useEffect } from 'react'
import style from './FormTwo.module.css'
import { Link } from "react-router-dom";
export default function FormTwo(props) {
    const [fname, setFName] = useState("");
    const [lName, setlName] = useState("");
    const enableBtn = () => {
        if (fname.length > 0 && lName.length > 0) {
            return false
        }
        else {
            return true
        }
    }
    return (
        <div className={style.form_container}>
            <form>
                <label className={style.name_label}>{props.label1}</label>
                <input className={style.name_input} onChange={(e) => { setFName(e.target.value) }} type="text" id="fname" placeholder={props.placeholder1}></input>
                <label className={style.name_label}>{props.label2}<span className={style.bracket}>{props.fadedtext}</span></label>
                <div className={style.semi_input}>
                    <input className={style.disabled_input} type="text" id="lname" name="lname" placeholder={props.disabledPlaceholder} disabled></input>
                    <input className={style.semi_name_input} onChange={(e) => { setlName(e.target.value) }} type="text" id="fname" placeholder={props.placeholder2}></input>
                </div>
                <Link to="Card" ><button style={{ backgroundColor: !enableBtn() ? 'rgb(102, 76, 229)' : '#878f99' }} className={style.only_button} disabled={enableBtn()}>{props.buttonText}</button></Link>

            </form>

        </div>

    )
}
