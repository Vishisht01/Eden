import React from 'react'
import style from './FormFour.module.css'
import FormHeading from './FormHeading'
import Button from './Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function FormFour({ displayName }) {
    return (
        <>
            <div className={style.Check}><CheckCircleIcon fontSize="large" /></div>
            <FormHeading firstHeading={`Congratulation, ${displayName}!`} secondHeading="You have completed on boarding, you can start using Eden." />
            <div className={style.form_container}>
                <Button buttonText="Launch Eden" />
            </div>
        </>
    )
}
