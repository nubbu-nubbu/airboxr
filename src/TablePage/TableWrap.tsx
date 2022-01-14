import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import { getSourceModule } from '../store/source/module';
import TablePage from './TablePage';

export default function TableWrap() {
    return (
        <DynamicModuleLoader modules={[getSourceModule()]}>
            <TablePage />
        </DynamicModuleLoader>
    )
}
