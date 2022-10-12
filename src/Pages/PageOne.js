import React from 'react';
import FormHeading from '../Components/FormHeading';
import FormOne from '../Components/FormOne';
export default function PageOne() {
    return (
        <>
            <FormHeading firstHeading="Welcome! First things first..." secondHeading="You can always change them later." />
            <FormOne label1="Full Name" placeholder1="Steve Job" label2="Display Name" placeholder2="Steve" buttonText="Create Workspace" />
        </>
    )
}
