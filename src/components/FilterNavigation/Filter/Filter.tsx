import React from 'react';
import angleDown from '../../../assets/icons/angle-down.png';
import classes from './Filter.module.scss'
import StagePopup from '../../StagePopup/StagePopup';
import Popup from '../../Popup/Popup';
import RangePopup from '../../RangePopup/RangePopup';

interface FilterProps {
    title: string;
    isActive: boolean;
    onToggle: (title: string) => void;
    onStagesUpdate?: (stages: string[]) => void;
    selectedStages?: string[];
    stagesData?: string[]; 
    onStatesUpdate?: (states: string[]) => void;
    selectedStates?: string[];
    statesData?: string[]; 
    onProjectTypesUpdate?: (projects: string[]) => void;
    selectedProjectTypes?: string[];
    projectTypesData?: string[]; 
    onMinTotalKWUpdate?: (minTotalKW: number) => void;
    onMaxTotalKWUpdate?: (maxTotalKW: number) => void;
    totalKW?: {
        minTotalKW: number;
        maxTotalKW: number;
    };
}

const Filter: React.FC<FilterProps> = ({
    title,
    isActive,
    onToggle,
    onStagesUpdate,
    selectedStages,
    stagesData, 
    onStatesUpdate,
    selectedStates,
    statesData, 
    onProjectTypesUpdate,
    selectedProjectTypes,
    projectTypesData, 
    totalKW,
    onMinTotalKWUpdate,
    onMaxTotalKWUpdate,
}) => {
    const renderPopup = () => {
        if (!isActive) return null;

        switch (title) {
            case 'Stage:':
                if (!onStagesUpdate || !stagesData) return null;
                return <StagePopup onStagesUpdate={onStagesUpdate} selectedStages={selectedStages || []} stagesData={stagesData} />;
            case 'State:':
                if (!onStatesUpdate || !statesData) return null;
                return <Popup label="State" onStatesUpdate={onStatesUpdate} selectedStates={selectedStates || []} statesData={statesData} />;
            case 'Project Type:':
                if (!onProjectTypesUpdate || !projectTypesData) return null;
                return <Popup label="Project Type" onProjectTypesUpdate={onProjectTypesUpdate} selectedProjectTypes={selectedProjectTypes || []} projectTypesData={projectTypesData} />;
            case 'Total kW DC:':
                if (!totalKW) return null;
                return <RangePopup totalKW={totalKW} onMinTotalKWUpdate={onMinTotalKWUpdate} onMaxTotalKWUpdate={onMaxTotalKWUpdate}/>;
            default:
                return null;
        }
    };

    const handlePopupClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={classes.Filter} onClick={() => onToggle(title)}>
            <div>{title}</div>
            <div className={classes.FilterOption}>Active</div>
            <img src={angleDown} alt="Arrow Down" className={`${isActive ? classes.rotate : ''}`}/>
            {isActive && (
                <div onClick={handlePopupClick}>
                    {renderPopup()}
                </div>
            )}
        </div>
    );
};

export default Filter;
