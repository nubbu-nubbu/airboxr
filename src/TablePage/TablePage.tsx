import { Typography, Button } from '@material-ui/core';
import React from 'react';
import {
    PageContainer,
    FixedTopBar,
    FixedMiddleBodyWithVerticalScroll,
    FixedBottomPominentButton,
    TopbarBackButton,
} from '../LayoutComponents/LayoutComponents';
import { BASE_URI, ENV_TYPE, PASS_WORD, USER_NAME } from '../paths';
import { openToast } from '../Toasts';

const TablePage = () => {
    const topbarLeftButton: TopbarBackButton = {
        type: 'back',
        onClick: () => console.log('Clicked back'),
    };
    console.log(BASE_URI, USER_NAME, PASS_WORD, ENV_TYPE);
    openToast('error', 'erooro rrer');
    openToast('success', 'erooro rrer');
    openToast('info', 'erooro rrer');
    openToast('warn', 'erooro rrer');
    return (
        <PageContainer>
            <FixedTopBar
                title="What would you like to do today?"
                leftButton={topbarLeftButton}
            />
            <FixedMiddleBodyWithVerticalScroll>
                {/* Body goes here */}
                <Typography variant="subtitle1" component="h6">
                    TAble
                </Typography>
                <Button variant="outlined">Import Data</Button>
                <Button variant="outlined">Lookup Data</Button>
            </FixedMiddleBodyWithVerticalScroll>
            <FixedBottomPominentButton
                title="Test / Debug"
                onClick={() =>
                    console.log('TODO - whatever you want to test/debug')
                }
            />
        </PageContainer>
    );
};

export default TablePage;
