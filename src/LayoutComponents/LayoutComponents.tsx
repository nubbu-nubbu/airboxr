import {
    Box,
    IconButton,
    Typography,
    Button,
    CircularProgress,
} from '@material-ui/core';
import { ArrowBack, Home, Chat } from '@material-ui/icons';
import React from 'react';

export interface TopbarBackButton {
    type: 'back';
    onClick: () => void | Promise<void>;
}

export interface TopbarHomeButton {
    type: 'home';
    onClick: () => void | Promise<void>;
}

export interface TopbarChatButton {
    type: 'chat';
    onClick: () => void | Promise<void>;
}

interface TopBarProps {
    leftButton?: TopbarBackButton;
    homeButton?: TopbarHomeButton;
    chatButton?: TopbarChatButton;
    title: string;
}

export const FixedTopBar: React.FunctionComponent<TopBarProps> = (props) => {
    return (
        <Box
            style={{
                top: 0,
                right: 0,
                bottom: 'auto',
                left: 0,
                position: 'fixed',
                height: 120,
            }}
            pt={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            {props.homeButton || props.chatButton ? <Box
                style={{
                    paddingLeft: 15,
                    paddingRight: 15,
                    height: 60,
                    background: 'whitesmoke',
                    width: '-webkit-fill-available',
                }}
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
            >
                {props.homeButton ? <IconButton
                    edge="start"
                    color="secondary"
                    onClick={props.homeButton.onClick}
                >
                    <Home />
                </IconButton> : undefined}
                {props.chatButton ? <Button
                    onClick={props.chatButton.onClick}
                    variant="contained"
                    color="secondary"
                    startIcon={<Chat />}
                >
                    Chat
                </Button> : undefined}
            </Box> : undefined}
            <Box
                style={{
                    height: 60,
                    paddingLeft: 15,
                    paddingRight: 15,
                    width: '-webkit-fill-available',
                }}
                display="flex"
                flexDirection="row"
                alignItems="center"
            >
                {props.leftButton ? (
                    <IconButton
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        onClick={props.leftButton.onClick}
                    >
                        <ArrowBack />
                    </IconButton>
                ) : undefined}
                <Typography variant="h2">{props.title}</Typography>
            </Box>
        </Box>
    );
};

interface BottomButtonProps {
    processing?: boolean;
    onClick: () => void | Promise<void>;
    title: string;
}

export const FixedBottomPominentButton: React.FunctionComponent<
    BottomButtonProps
> = (props) => {
    return (
        <Box
            style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 15,
                height: 50,
                top: 'auto',
                right: 0,
                bottom: 0,
                left: 0,
                position: 'fixed',
            }}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            {props.processing || false ? (
                <CircularProgress />
            ) : (
                <Button
                    style={{ height: 50, width: '100%' }}
                    onClick={props.onClick}
                >
                    {props.title}
                </Button>
            )}
        </Box>
    );
};

export const FixedMiddleBodyWithVerticalScroll: React.FunctionComponent<{}> = (
    props,
) => {
    return (
        <Box
            style={{
                paddingLeft: 15,
                paddingRight: 15,
                top: 130,
                right: 0,
                bottom: 65,
                left: 0,
                position: 'fixed',
                overflowY: 'scroll',
            }}
            display="flex"
            flexDirection="column"
        >
            {props.children}
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
