// import { Typography, Button, Box, IconButton } from '@material-ui/core';
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

const ExamplePage = () => {
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
                title="Example Page Title"
                leftButton={topbarLeftButton}
            />
            <FixedMiddleBodyWithVerticalScroll>
                {/* Body goes here */}
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

export default ExamplePage;
