import React, { useState } from 'react'
import style from './FormTwo.module.css'
import { Link } from "react-router-dom";
import Button from './Button';
export default function FormTwo(props) {
    const [workSpaceName, setWorkSpaceName] = useState("");
    const [workSpaceUrl, setWorkSpaceUrl] = useState('')
    const enableBtn = () => {
        if (workSpaceName.length > 0) {
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
                <input className={style.name_input} onChange={(e) => { setWorkSpaceName(e.target.value) }} type="text" id="fname" placeholder={props.placeholder1}></input>
                <label className={style.name_label}>{props.label2}<span className={style.bracket}>{props.fadedtext}</span></label>
                <div className={style.semi_input}>
                    <input className={style.disabled_input} type="text" id="lname" name="lname" placeholder={props.disabledPlaceholder} disabled></input>
                    <input className={style.semi_name_input} onChange={(e) => { setWorkSpaceUrl(e.target.value) }} type="text" id="fname" placeholder={props.placeholder2}></input>
                </div>
                <Link to="Card" ><Button additionalStyle={{ backgroundColor: !enableBtn() ? 'rgb(102, 76, 229)' : 'rgba(102, 76, 229, 0.75)' }} disableBtn={enableBtn()} buttonText={props.buttonText} /></Link>

            </form>

        </div>

    )
}
