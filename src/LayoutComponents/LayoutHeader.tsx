import {
    Box,
    IconButton,
    Button,
} from '@material-ui/core';
import { Home, Chat } from '@material-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface HeaderHomeButton {
    type: 'home';
    onClick: () => void | Promise<void>;
}

export interface HeaderChatButton {
    type: 'chat';
    onClick: () => void | Promise<void>;
}

interface HeaderProps {
    chatButton?: HeaderChatButton;
}

export const FixedHeaderBar: React.FunctionComponent<HeaderProps> = (props) => {
    const navigate = useNavigate();

    return (
        <Box
            style={{
                top: 0,
                right: 0,
                bottom: 'auto',
                left: 0,
                position: 'fixed',
                height: 60,
                paddingLeft: 15,
                paddingRight: 15,
                background: 'whitesmoke',
                width: '-webkit-fill-available',
            }}
            pt={1}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <IconButton
                edge="start"
                color="secondary"
                onClick={() => navigate('/airboxr/home')}
            >
                <Home />
            </IconButton>
            {props.chatButton ? <Button
                onClick={props.chatButton.onClick}
                variant="contained"
                color="secondary"
                startIcon={<Chat />}
            >
                Chat
            </Button> : undefined}
        </Box>
    );
};

export const PageContainer: React.FunctionComponent<{}> = (props) => {
    return (
        <Box display="flex" flexDirection="column">
            {props.children}
        </Box>
    );
};
