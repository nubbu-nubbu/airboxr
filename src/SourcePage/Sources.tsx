import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import './Sources.css';
import LogoMCh from '../images/mailchimp-logo.png';
import LogoGAd from '../images/ggoogle-ads-logo.png';
import LogoGAn from '../images/google-analytics-logo.png';
import LogoFAd from '../images/facebook-ads-logo.png';
import { CircularProgress, IconButton, Typography } from '@material-ui/core';
import { markFavourite } from '../store/source/action';

const LogoMap:any = {
    114: LogoMCh,
    115: LogoGAn,
    116: LogoFAd,
    117: LogoGAd,
}

export default function Sources() {
    const { sources, loading } = useSelector(({ source }: any) => source);
    const dispatch = useDispatch();

    const clickHandler = () => {

    }

    return (
        <div className='sources-wrap'>
            {loading ? <CircularProgress /> : sources.sort((a:any, b:any) => b.favorite - a.favorite).map((src: any) => {
                const { id, name, favorite } = src;
                return <div className='source-card' key={id}>
                    <Typography
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 3,
                        }}
                        variant="subtitle1"
                        component="p"
                    >
                        {name}
                    </Typography>
                    <img onClick={clickHandler} src={LogoMap[id]} alt={name} />
                    <div className='favorite-wrap'>
                        <IconButton
                            onClick={() => dispatch(markFavourite({ id }))}
                            style={{ padding: 3 }}
                        >
                            {!favorite ? <FavoriteBorder /> : <Favorite />}
                        </IconButton>
                    </div>
                </div>;
            })}
        </div>
    )
}
