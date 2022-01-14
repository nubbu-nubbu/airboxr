import { Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import Sources from './Sources';
import React from 'react';
import {
    FixedTopBar,
    FixedMiddleBodyWithVerticalScroll,
    TopbarBackButton,
} from '../LayoutComponents/LayoutComponents';
import { getSourceModule } from '../store/source/module';
import { SOURCE_TITLE, SOURCE_WELCOME } from '../constant';

const SourcePage = () => {
    
    const navigate = useNavigate();

    const topbarLeftButton: TopbarBackButton = {
        type: 'back',
        onClick: () => navigate('/airboxr/home'),
    };

    return (
        <>
            <FixedTopBar
                title={SOURCE_TITLE}
                leftButton={topbarLeftButton}
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
                    {SOURCE_WELCOME}
                </Typography>
                <DynamicModuleLoader modules={[getSourceModule()]}>
                    <Sources />
                </DynamicModuleLoader>
            </FixedMiddleBodyWithVerticalScroll>
        </>
    );
};

export default SourcePage;
