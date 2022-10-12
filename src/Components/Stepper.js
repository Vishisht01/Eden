import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import style from './Stepper.module.css';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useSelector } from 'react-redux';


const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#664CE6',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#664CE6',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
        marginLeft: -16,
        marginRight: -8
    },
}));

export default function HorizontalNonLinearStepper({ }) {
    const activeStep = useSelector((state) => state.step);
    return (
        <div className={style.stepper_container}>
            <div className={style.stepper}>
                <Box sx={{ width: '100%' }}>
                    <Stepper connector={<QontoConnector />} activeStep={activeStep}>
                        {Array(4).fill("").map((_, index) => (
                            <Step key={index}>
                                <StepButton style={{ color: 'red' }} disabled color="red" />
                            </Step>
                        ))}
                    </Stepper>

                </Box>
            </div>
        </div>
    );
}