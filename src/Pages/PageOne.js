import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormHeading from '../Components/FormHeading';
import FormOne from '../Components/FormOne';
import { actions } from '../redux';
export default function PageOne() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: actions.SET_STEP, payload: { step: 0 } })
    }, [])
    return (
        <>
            <FormHeading firstHeading="Welcome! First things first..." secondHeading="You can always change them later." />
            <FormOne label1="Full Name" placeholder1="Steve Job" label2="Display Name" placeholder2="Steve" buttonText="Create Workspace" onSubmit={(displayName) => { dispatch({ type: actions.SET_NAME, payload: { name: displayName } }) }} />
        </>
    )
}
