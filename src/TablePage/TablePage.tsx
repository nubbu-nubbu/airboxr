import { Typography, CircularProgress, FormControl, RadioGroup, Radio, FormControlLabel, TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    FixedTopBar,
    FixedMiddleBodyWithVerticalScroll,
    FixedBottomPominentButton,
    TopbarBackButton,
} from '../LayoutComponents/LayoutComponents';
import { useSelector } from 'react-redux';
import { TABLE_NAME_SEPARATOR, TABLE_TITLE, TABLE_WELCOME } from '../constant';
import { openToast } from '../Toasts';

const TablePage = () => {
    const { sources, loading } = useSelector(({ source }: any) => source);
    const navigate = useNavigate();
    const params = useParams();
    const [history, setHistory] = useState<any>([]);
    const [value, setValue] = useState('');
    const [filter, setFilter] = useState('');
    const [filteredTables, setFilteredTables] = useState<any>([]);

    const getTables = () => {
        const source = sources.find((src: any) => src.id == params.source);
        if (!source) {
            openToast('warn', 'Source not found.');
            return navigate('/airboxr/source');
        }
        if (history.length) {
            return Array.from(new Set(source.tables.filter((table: any) => {
                const split = table.title.split(TABLE_NAME_SEPARATOR);
                for (let i = 0; i < history.length; i += 1) {
                    if (history[i] !== split[i]) return false;
                }
                return true;
            }).map((tab: any) => tab.title.split(TABLE_NAME_SEPARATOR)[history.length])));
        } else {
            return Array.from(new Set(source.tables.map((table: any) => table.title.split(TABLE_NAME_SEPARATOR)[0])))
        }
    }

    const getSourceName = () => {
        const source = sources.find((src: any) => src.id == params.source);
        if (history.length) {
            return history[history.length - 1];
        } else {
            return source?.name;
        }
    }

    const backHandler = () => {
        if (history.length) {
            setHistory(history.filter((_: any, i :number, self: any) => i !== self.length - 1));
            setFilter('');
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
        // tables having more nested table after value
        const arr = source.tables.filter((table: any) => {
            const split = table.title.split(TABLE_NAME_SEPARATOR);
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
        setFilter('');
    }

    let filterTimeout:any = useRef();
    useEffect(() => {
        if (sources.length) {
            const tables:any = getTables();
            if (filter.length <= 2) {
                clearTimeout(filterTimeout.current);
                setFilteredTables(tables);
            } else {
                clearTimeout(filterTimeout);
                filterTimeout.current = setTimeout(() => {
                    setFilteredTables(tables.filter((tab: any) => tab.toLowerCase().includes(filter.toLowerCase())));
                }, 500);
            }
        }
    }, [filter, sources, history]);

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
                {`${getSourceName() || params.source} ${TABLE_WELCOME}`}
                </Typography>
                <TextField id="filter" label="Filter" variant="standard" value={filter} onChange={(e) => setFilter(e.target.value)} />
                {loading ? <CircularProgress /> : (<FormControl component="fieldset">
                    <RadioGroup
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    >
                        {filteredTables.map((table: any) => {
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
