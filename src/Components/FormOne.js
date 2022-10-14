import React, { useState, useEffect } from 'react'
import style from './FormOne.module.css'
import { Link } from "react-router-dom";
export default function FormOne({ placeholder1, placeholder2, label1, label2, buttonText, onSubmit }) {
    const [displayName, setDisplayName] = useState('');
    const [fname, setFName] = useState("");


    const enableBtn = () => {
        if (fname.length > 0 && displayName.length > 0) {
            return false
        }
        else {
            return true
        }
    }
    return (
        <div className={style.form_container}>
            <form>
                <label className={style.name_label}>{label1}</label>
                <input className={style.name_input} onChange={(e) => { setFName(e.target.value) }} type="text" id="fname" placeholder={placeholder1}></input>
                <label className={style.name_label}>{label2}</label>
                <input className={style.name_input} onChange={(event) => { setDisplayName(event.target.value) }} type="text" id="fname" placeholder={placeholder2} />
                <Link to="Workspace"><button style={{ backgroundColor: !enableBtn() ? 'rgb(102, 76, 229)' : 'rgba(102, 76, 229, 0.75)' }} className={style.only_button} onClick={() => onSubmit(displayName)} disabled={enableBtn()} >{buttonText}</button></Link>
            </form>
        </div>
    )
}
