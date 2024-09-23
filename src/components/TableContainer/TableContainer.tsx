
import React from 'react';
import FilterBar from "../FilterNavigation/FilterBar";
import TableLayout from "../TableLayout/TableLayout";
import { data, headers } from "../../data/apiData/data";
import { Data } from '../../types/DataType';
import { convertDataToDataRow } from '../../utils/shared/functions';
import useFilter from '../../data/hooks/useFilter';

const TableContainer: React.FC = () => {
    const {
        selectedData,
        filteredData,
        activeFilter,
        filterBarData,
        handleUpdate,
        handleFilterChange,
    } = useFilter(data);

    const dataRow = convertDataToDataRow(filteredData);
    console.log(filteredData);
    console.log(selectedData)

    return (
        <>
            <FilterBar 
                selectedData={selectedData}
                handleUpdate={handleUpdate}
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
                filterBarData={filterBarData}
            />
            <TableLayout data={dataRow} headers={headers} />
        </>
    );
};

export default TableContainer;
