import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormFour from "../Components/FormFour";
import { actions } from '../redux';
export default function PageFour() {
    const displayName = useSelector((state) => state.name)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: actions.SET_STEP, payload: { step: 3 } })
    }, [])
    return (
        <FormFour displayName={displayName} />
    )
}
