import React from 'react';
import Column from '../Column/Column';
import Chip from '../../../Chip/Chip';
import classes from './Row.module.scss'
import { Header } from '../../../../types/DataType';
import { getChipStyles } from '../../../../utils/styles/style';

interface RowProps {
    rowData: Array<string | number>;
    headers: Header[];
}


const renderCell = (type: string, cellData: string | number) => {
    switch (type) {
        case 'stage':
            const { background, color } = getChipStyles(String(cellData));
            return (
                <Chip
                    label={String(cellData)}
                    background={background}
                    color={color}
                    width='110px'
                    className='ChipColumn'
                />
            );
        case 'text': 
            return <Column cellData={cellData} />;
        default:
            return <Column cellData={cellData} />;
    }
};

const Row: React.FC<RowProps> = ({ rowData, headers }) => {
    return (
        <tr>
            {rowData.map((cellData, index) => {
                const cellType = headers[index].type;
                return (
                    <td key={index}>
                        {renderCell(cellType, cellData)}
                    </td>
                );
            })}
        </tr>
    );
};

export default Row;
