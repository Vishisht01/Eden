import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import FormHeading from '../Components/FormHeading';
import FormTwo from '../Components/FormTwo';
import { actions } from '../redux';
export default function PageTwo() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: actions.SET_STEP, payload: { step: 1 } })
    }, [])
    return (
        <>
            <FormHeading firstHeading="Let's setup a home for all your work" secondHeading="You can always create another workspace later." />
            <FormTwo label1="Workspace Name" placeholder1="Eden" label2="WorkspaceURL" fadedtext="(optional)" disabledPlaceholder="www.eden.com/" placeholder2="Example" buttonText="Create Workspace" />
        </>
    )
}
