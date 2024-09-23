// components/TableLayout/TableLayout.tsx
import React from 'react';
import classes from './TableLayout.module.scss'
import Table from './Table/Table';
import { Data, Header, DataRow } from '../../types/DataType';
import Pagination from '../Pagination/Pagination';

interface TableLayoutProps {
    data: DataRow[];
    headers: Header[];
}

const TableLayout: React.FC<TableLayoutProps> = ({ data, headers }) => {

    return (
        <div className={classes.TableLayout}>
            <Table data={data} headers={headers} />
            <Pagination />
        </div>
    );
};

export default TableLayout;
