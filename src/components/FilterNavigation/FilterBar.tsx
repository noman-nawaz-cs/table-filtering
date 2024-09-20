import React from 'react';
import './FilterBar.scss';
import Filter from './Filter/Filter';
import { SelectedData } from '../../types/DataType';
interface FilterBarProps {
    selectedData: SelectedData;
    onStagesUpdate: (stages: string[]) => void;
    onStatesUpdate: (states: string[]) => void;
    onProjectTypesUpdate: (projects: string[]) => void;
    onMinTotalKWUpdate: (minTotalKW: number) => void;
    onMaxTotalKWUpdate: (maxTotalKW: number) => void;
    activeFilter: string | null;
    onFilterChange: (filter: string | null) => void;
    stagesData: string[]; // Added
    statesData: string[]; // Added
    projectTypesData: string[]; // Added
    totalKW: {
        minTotalKW: number;
        maxTotalKW: number;
    };
}

const FilterBar: React.FC<FilterBarProps> = ({
    selectedData,
    onStagesUpdate, 
    onStatesUpdate, 
    onProjectTypesUpdate,
    onMinTotalKWUpdate,
    onMaxTotalKWUpdate,
    activeFilter,
    onFilterChange,
    stagesData,
    statesData,
    projectTypesData,
    totalKW,
}) => {
    const togglePopup = (title: string) => {
        onFilterChange(activeFilter === title ? null : title);
    };

    return (
        <div className="FilterBar">
            <Filter 
                title="Stage:" 
                isActive={activeFilter === 'Stage:'} 
                onToggle={() => togglePopup('Stage:')} 
                onStagesUpdate={onStagesUpdate} 
                selectedStages={selectedData.stages} 
                stagesData={stagesData}
            />
            <Filter 
                title="State:" 
                isActive={activeFilter === 'State:'} 
                onToggle={() => togglePopup('State:')} 
                onStatesUpdate={onStatesUpdate} 
                selectedStates={selectedData.states} 
                statesData={statesData} 
            />
            <Filter 
                title="Project Type:" 
                isActive={activeFilter === 'Project Type:'} 
                onToggle={() => togglePopup('Project Type:')} 
                onProjectTypesUpdate={onProjectTypesUpdate} 
                selectedProjectTypes={selectedData.projectTypes}
                projectTypesData={projectTypesData} 
            />
            <Filter 
                title="Total kW DC:" 
                isActive={activeFilter === 'Total kW DC:'} 
                onToggle={() => togglePopup('Total kW DC:')}
                onMinTotalKWUpdate={onMinTotalKWUpdate}
                onMaxTotalKWUpdate={onMaxTotalKWUpdate}
                totalKW = {totalKW} 
            />
        </div>
    );
};

export default FilterBar;
