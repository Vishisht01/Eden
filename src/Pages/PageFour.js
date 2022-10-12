import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormFour from "../Components/FormFour";
export default function PageFour() {
    const displayName = useSelector((state) => state.name)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'set/step', payload: { step: 3 } })
    }, [])
    return (
        <FormFour displayName={displayName} />
    )
}
