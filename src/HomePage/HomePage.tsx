import { Typography, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import React from 'react';
import {
    FixedTopBar,
    FixedMiddleBodyWithVerticalScroll,
} from '../LayoutComponents/LayoutComponents';
import { HOME_TITLE, HOME_WELCOME } from '../constant';

const HomePage = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/airboxr/source');
    }

    return (
        <>
            <FixedTopBar
                title={HOME_TITLE}
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
                    {HOME_WELCOME}
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
        </>
    );
};

export default HomePage;
