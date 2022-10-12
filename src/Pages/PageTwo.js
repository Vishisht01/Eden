import React from 'react'
import FormHeading from '../Components/FormHeading';
import FormTwo from '../Components/FormTwo';

export default function PageTwo() {
    return (
        <>
            <FormHeading firstHeading="Let's setup a home for all your work" secondHeading="You can always create another workspace later." />
            <FormTwo label1="Workspace Name" placeholder1="Eden" label2="WorkspaceURL" fadedtext="(optional)" disabledPlaceholder="www.eden.com/" placeholder2="Example" buttonText="Create Workspace" />
        </>
    )
}
