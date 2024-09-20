// components/TableContainer/TableContainer.tsx
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
        stagesData,
        statesData,
        projectTypesData,
        minTotalKW,
        maxTotalKW,
        handleStagesUpdate,
        handleStatesUpdate,
        handleProjectTypeUpdate,
        handleMinTotalKWUpdate,
        handleMaxTotalKWUpdate,
        handleFilterChange,
    } = useFilter(data);

    const dataRow = convertDataToDataRow(filteredData);

    return (
        <>
            <FilterBar 
                selectedData={selectedData}
                onStagesUpdate={handleStagesUpdate}
                onStatesUpdate={handleStatesUpdate}
                onProjectTypesUpdate={handleProjectTypeUpdate}
                onMinTotalKWUpdate={handleMinTotalKWUpdate}
                onMaxTotalKWUpdate={handleMaxTotalKWUpdate}
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
                stagesData={stagesData}
                statesData={statesData}
                projectTypesData={projectTypesData}
                totalKW={{ minTotalKW, maxTotalKW }} // Passing the totalKW as an object
            />
            <TableLayout data={dataRow} headers={headers} />
        </>
    );
};

export default TableContainer;
