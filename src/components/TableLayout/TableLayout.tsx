// components/TableLayout/TableLayout.tsx
import React from 'react';
import './TableLayout.scss';
import Table from './Table/Table';
import { Data, Header, DataRow } from '../../types/DataType';

interface TableLayoutProps {
    data: DataRow[];
    headers: Header[];
}


const TableLayout: React.FC<TableLayoutProps> = ({ data, headers }) => {

    return (
        <div className="TableLayout">
            <Table data={data} headers={headers} />
        </div>
    );
};

export default TableLayout;
