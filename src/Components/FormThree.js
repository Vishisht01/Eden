import React from 'react'
import Card from './Card'
import Button from './Button'
import style from "./FormThree.module.css"
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom";
export default function FormThree() {
    return (
        <div className={style.form_container}>
            <div className={style.card_container}>
                <Card Heading="For myself" Text="Write better. Think more clearly. Stay organised." image={<PersonIcon />} />
                <Card Heading="With my team" Text="Wikis,docs,tasks and projects all in one place. " image={<GroupsIcon />} />
            </div>
            <form>
                <Link to="Success" ><Button buttonText="Create Workspace" /></Link>
            </form>
        </div>
    )
}
