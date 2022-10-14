import React, { useState } from 'react'
import Card from './Card'
import Button from './Button'
import style from "./FormThree.module.css"
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom";
export default function FormThree() {
    const [selectedCard, setSelectedCard] = useState('')
    function selectCard(card) {
        setSelectedCard(card)
    }
    const enableBtn = () => {
        if (selectedCard.length > 0) {
            return false
        }
        else {
            return true
        }
    }

    return (
        <div className={style.form_container}>
            <div className={style.card_container}  >
                <Card selectedCard={selectedCard} onPressCard={(cardName) => { selectCard(cardName) }} Heading="For myself" Text="Write better. Think more clearly. Stay organised." image={<PersonIcon />} />
                <Card selectedCard={selectedCard} onPressCard={(cardName) => { selectCard(cardName) }} Heading="With my team" Text="Wikis,docs,tasks and projects all in one place. " image={<GroupsIcon />} />
            </div>
            <form>
                <Link to="Success" ><Button disableBtn={enableBtn()} additionalStyle={{ backgroundColor: !enableBtn() ? 'rgb(102, 76, 229)' : 'rgba(102, 76, 229, 0.75)' }} buttonText="Create Workspace" /></Link>
            </form>
        </div>
    )
}
