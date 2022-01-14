import { Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import Sources from './Sources';
import React from 'react';
import {
    PageContainer,
    FixedTopBar,
    FixedMiddleBodyWithVerticalScroll,
    TopbarBackButton,
    TopbarChatButton,
    TopbarHomeButton,
} from '../LayoutComponents/LayoutComponents';
import { getSourceModule } from '../store/source/module';
import { openToast } from '../Toasts';

const SourcePage = () => {
    
    const navigate = useNavigate();

    const topbarLeftButton: TopbarBackButton = {
        type: 'back',
        onClick: () => navigate('/airboxr/home'),
    };

    const topbarHomeButton: TopbarHomeButton = {
        type: 'home',
        onClick: () => navigate('/airboxr/home'),
    };

    const topbarChatButton: TopbarChatButton = {
        type: 'chat',
        onClick: () => {
            openToast('info', 'Chat Clicked!')
        },
    };

    return (
        <PageContainer>
            <FixedTopBar
                title="Select source."
                leftButton={topbarLeftButton}
                homeButton={topbarHomeButton}
                chatButton={topbarChatButton}
            />
            <FixedMiddleBodyWithVerticalScroll>
                <Typography 
                    style={{
                        paddingTop: 20,
                        paddingBottom: 35,
                    }}
                    variant="subtitle1"
                    component="p"
                >
                    Below is a list of sources you have connected. Please choose the data source you would like to import data from.
                </Typography>
                <DynamicModuleLoader modules={[getSourceModule()]}>
                    <Sources />
                </DynamicModuleLoader>
            </FixedMiddleBodyWithVerticalScroll>
        </PageContainer>
    );
};

export default SourcePage;
