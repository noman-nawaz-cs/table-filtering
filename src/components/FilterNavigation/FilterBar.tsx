import React from 'react';
import classes from './FilterBar.module.scss'
import Filter from './Filter/Filter';
import { SelectedData } from '../../types/DataType';
import { FilteredData } from '../../data/hooks/useFilter';

interface FilterBarProps {
    selectedData: SelectedData;
    handleUpdate: (key: keyof FilteredData, value: any) => void;
    activeFilter: string | null;
    onFilterChange: (filter: string | null) => void;
    filterBarData: {
        stagesData: string[];
        statesData: string[];
        projectTypesData: string[];
        totalKW: {
            minTotalKW: number;
            maxTotalKW: number;
        };
    };
}

const FilterBar: React.FC<FilterBarProps> = ({
    selectedData,
    handleUpdate,
    activeFilter,
    onFilterChange,
    filterBarData,
}) => {
    const togglePopup = (title: string) => {
        onFilterChange(activeFilter === title ? null : title);
    };

    return (
        <div className={classes.FilterBar}>
            <Filter 
                title="Stage:" 
                isActive={activeFilter === 'Stage:'} 
                onToggle={() => togglePopup('Stage:')} 
                onStagesUpdate={(stages) => handleUpdate('stages', stages)} 
                selectedStages={selectedData.stages} 
                stagesData={filterBarData.stagesData}
            />
            <Filter 
                title="State:" 
                isActive={activeFilter === 'State:'} 
                onToggle={() => togglePopup('State:')} 
                onStatesUpdate={(states) => handleUpdate('states', states)} 
                selectedStates={selectedData.states} 
                statesData={filterBarData.statesData} 
            />
            <Filter 
                title="Project Type:" 
                isActive={activeFilter === 'Project Type:'} 
                onToggle={() => togglePopup('Project Type:')} 
                onProjectTypesUpdate={(projects) => handleUpdate('projectTypes', projects)} 
                selectedProjectTypes={selectedData.projectTypes}
                projectTypesData={filterBarData.projectTypesData} 
            />
            <Filter 
                title="Total kW DC:" 
                isActive={activeFilter === 'Total kW DC:'} 
                onToggle={() => togglePopup('Total kW DC:')}
                onMinTotalKWUpdate={(minTotalKW) => handleUpdate('totalKW', { minTotalKW })} 
                onMaxTotalKWUpdate={(maxTotalKW) => handleUpdate('totalKW', { maxTotalKW })} 
                totalKW={filterBarData.totalKW} 
            />
        </div>
    );
};

export default FilterBar;
