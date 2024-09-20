
import React from 'react';
import Row from './Row/Row';
import './Table.scss';
import TableHeading from './TableHeading/TableHeading';
import { DataRow, Header } from '../../../types/DataType';

interface TableProps {
    data: DataRow[];
    headers: Header[];
}

const Table: React.FC<TableProps> = ({ data, headers }) => {
    const renderRow = (row: DataRow, rowIndex: number) => {
        const rowData = headers.map(header => row[header.fieldName]);
        return (
            <Row
                key={rowIndex}
                rowData={rowData}
                headers={headers}
            />
        );
    };

    return (
        <div className="table-container">
            <table className="responsive-table">
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header.fieldName}>
                                <TableHeading title={header.label} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => renderRow(row, rowIndex))
                    ) : (
                        <tr>
                            <td colSpan={headers.length}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
