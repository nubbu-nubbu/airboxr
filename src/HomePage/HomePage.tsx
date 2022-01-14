import { Typography, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import React from 'react';
import {
    PageContainer,
    FixedTopBar,
    FixedMiddleBodyWithVerticalScroll,
    TopbarHomeButton,
    TopbarChatButton
} from '../LayoutComponents/LayoutComponents';
import { openToast } from '../Toasts';

const HomePage = () => {
    const navigate = useNavigate();

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

    const clickHandler = () => {
        navigate('/airboxr/source');
    }

    return (
        <PageContainer>
            <FixedTopBar
                title="What would you like to do today?"
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
                    Welcome to AirBoxr. Let's start with the task you want to accomplish today.
                </Typography>
                <Button
                    variant="outlined"
                    style={{ width: 200, alignSelf: 'center', margin: 5 }}
                    onClick={clickHandler}
                >
                    Import Data
                </Button>
                <Button
                    variant="outlined"
                    style={{ width: 200, alignSelf: 'center', margin: 5 }}
                    color="secondary"
                    onClick={clickHandler}
                >
                    Lookup Data
                </Button>
            </FixedMiddleBodyWithVerticalScroll>
        </PageContainer>
    );
};

export default HomePage;
