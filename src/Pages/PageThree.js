import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import FormHeading from '../Components/FormHeading';
import FormThree from '../Components/FormThree';

export default function PageThree() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'set/step', payload: { step: 2 } })
    }, [])
    return (
        <>
            <FormHeading firstHeading="How are you planning to use Eden?" secondHeading="We'll streamline your setup experience accordingly" />
            <FormThree />
        </>
    )
}
