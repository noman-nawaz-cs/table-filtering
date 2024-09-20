import React from 'react';
import LabelCheckbox from '../LabelCheckbox/LabelCheckbox';
import './Popup.scss';

interface PopupProps {
    label: string;
    onStatesUpdate?: (states: string[]) => void;
    selectedStates?: string[];
    onProjectTypesUpdate?: (projects: string[]) => void;
    selectedProjectTypes?: string[];
    statesData?: string[]; 
    projectTypesData?: string[]; 
}

const Popup: React.FC<PopupProps> = ({
    label,
    onStatesUpdate,
    selectedStates,
    onProjectTypesUpdate,
    selectedProjectTypes,
    statesData,
    projectTypesData 
}) => {
    const projectTypeData = projectTypesData || [];
    const uniqueProjectTypes = Array.from(new Set(projectTypeData));

    const handleCheckboxChange = (value: string, isChecked: boolean) => {
        if (label === 'State' && onStatesUpdate) {
            if (value === 'All') {
                const allStates = isChecked ? statesData || [] : [];
                onStatesUpdate(isChecked ? allStates : []);
            } else {
                const newStates = isChecked 
                    ? [...(selectedStates || []), value]
                    : (selectedStates || []).filter(state => state !== value);
                onStatesUpdate(newStates);
            }
        } else if (label === 'Project Type' && onProjectTypesUpdate) {
            if (value === 'All') {
                const allProjectTypes = isChecked ? uniqueProjectTypes : [];
                onProjectTypesUpdate(isChecked ? allProjectTypes : []);
            } else {
                const newProjectTypes = isChecked 
                    ? [...(selectedProjectTypes || []), value]
                    : (selectedProjectTypes || []).filter(project => project !== value);
                onProjectTypesUpdate(newProjectTypes);
            }
        }
    };

    return (
        <div className='Popup'>
            {label === 'State' && statesData && (
                <>
                    <LabelCheckbox
                        label="All"
                        checked={statesData.length > 0 && (selectedStates || []).length === statesData.length}
                        onChange={(e) => handleCheckboxChange('All', e.target.checked)}
                    />
                    {statesData.map((state, index) => (
                        <LabelCheckbox
                            key={index}
                            label={state}
                            checked={selectedStates?.includes(state) || false}
                            onChange={(e) => handleCheckboxChange(state, e.target.checked)}
                        />
                    ))}
                </>
            )}
            {label === 'Project Type' && projectTypeData && (
                <>
                    <LabelCheckbox
                        label="All"
                        checked={uniqueProjectTypes.length > 0 && (selectedProjectTypes || []).length === uniqueProjectTypes.length}
                        onChange={(e) => handleCheckboxChange('All', e.target.checked)}
                    />
                    {uniqueProjectTypes.map((type, index) => (
                        <LabelCheckbox
                            key={index}
                            label={type}
                            checked={selectedProjectTypes?.includes(type) || false}
                            onChange={(e) => handleCheckboxChange(type, e.target.checked)}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default Popup;
