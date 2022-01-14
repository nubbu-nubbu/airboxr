import { Typography, CircularProgress, FormControl, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    FixedTopBar,
    FixedMiddleBodyWithVerticalScroll,
    FixedBottomPominentButton,
    TopbarBackButton,
} from '../LayoutComponents/LayoutComponents';
import { useSelector } from 'react-redux';
import { TABLE_TITLE, TABLE_WELCOME } from '../constant';

const tableNameSeparator = '||';

const TablePage = () => {
    const { sources, loading } = useSelector(({ source }: any) => source);
    const navigate = useNavigate();
    const params = useParams();
    const [history, setHistory] = useState<any>([]);
    const [value, setValue] = useState('');

    const getTables = () => {
        const source = sources.find((src: any) => src.id == params.source);
        if (history.length) {
            if (!source) return [];
            return Array.from(new Set(source.tables.filter((table: any) => {
                const split = table.title.split(tableNameSeparator);
                for (let i = 0; i < history.length; i += 1) {
                    if (history[i] !== split[i]) return false;
                }
                return true;
            }).map((tab: any) => tab.title.split(tableNameSeparator)[history.length])));
        } else {
            if (!source) return [];
            return Array.from(new Set(source.tables.map((table: any) => table.title.split(tableNameSeparator)[0])))
        }
    }

    const getSourceName = () => {
        if (history.length) {
            return history[history.length - 1];
        } else {
            const source = sources.find((src: any) => src.id == params.source);
            if (!source) return params.source;
            return source.name;
        }
    }

    const backHandler = () => {
        if (history.length) {
            setHistory(history.filter((_: any, i :number, self: any) => i !== self.length - 1));
        } else {
            navigate('/airboxr/source');
        }
    }

    const topbarLeftButton: TopbarBackButton = {
        type: 'back',
        onClick: backHandler,
    };

    const hasChildren = (val: string) => {
        const source = sources.find((src: any) => src.id == params.source);
        if (!source) return false;
        const arr = source.tables.filter((table: any) => {
            const split = table.title.split(tableNameSeparator);
            for (let i = 0; i < history.length; i += 1) {
                if (history[i] !== split[i]) return false;
            }
            if (split.length > history.length && val === split[history.length] && split[history.length + 1]) return true;
            return false;
        });
        return !!arr.length;
    }

    const nextHandler = () => {
        setHistory(history.concat(value));
        setValue('');
    }

    return (
        <>
            <FixedTopBar
                title={TABLE_TITLE}
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
                {`${getSourceName()} ${TABLE_WELCOME}`}
                </Typography>
                {loading ? <CircularProgress /> : (<FormControl component="fieldset">
                    <RadioGroup
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    >
                        {getTables()?.map((table: any) => {
                            return (<FormControlLabel key={table} value={table} control={<Radio />} label={table} />)
                        })}
                    </RadioGroup>
                </FormControl>)}
            </FixedMiddleBodyWithVerticalScroll>
            <FixedBottomPominentButton
                title="Next"
                onClick={nextHandler}
                disabled={!hasChildren(value)}
            />
        </>
    );
};

export default TablePage;
