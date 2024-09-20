import { useState, useMemo, useEffect } from 'react';
import { Data } from '../../types/DataType';

interface FilteredData {
    stages: string[];
    states: string[];
    projectTypes: string[];
    totalKW: {
        minTotalKW: number;
        maxTotalKW: number;
    };
}

const useFilter = (data: Data[]) => {
    const [selectedData, setSelectedData] = useState<FilteredData>({
        stages: [],
        states: [],
        projectTypes: [],
        totalKW: {
            minTotalKW: 0,
            maxTotalKW: Infinity, // Use Infinity for upper limit
        },
    });

    const [filteredData, setFilteredData] = useState<Data[]>(data);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const stagesData = useMemo(() => Array.from(new Set(data.map(item => item.StageName))), [data]);
    const statesData = useMemo(() => Array.from(new Set(data.map(item => item.Project_Address__StateCode__s))), [data]);
    const projectTypesData = useMemo(() => Array.from(new Set(data.map(item => item.Project_Type__c))), [data]);
    
    const minTotalKW = useMemo(() => Math.min(...data.map(item => item.Total_kW)), [data]);
    const maxTotalKW = useMemo(() => Math.max(...data.map(item => item.Total_kW)), [data]);

    useEffect(() => {
        filterData();
    }, [selectedData]); // Re-run filtering whenever selectedData changes

    const filterData = () => {
        const { stages, states, projectTypes, totalKW } = selectedData;

        const filtered = data.filter((item: Data) => 
            (stages.length === 0 || stages.includes(item.StageName)) &&
            (states.length === 0 || states.includes(item.Project_Address__StateCode__s)) &&
            (projectTypes.length === 0 || projectTypes.includes(item.Project_Type__c)) &&
            (item.Total_kW >= totalKW.minTotalKW && item.Total_kW <= totalKW.maxTotalKW)
        );

        setFilteredData(filtered);
    };

    const handleStagesUpdate = (stages: string[]) => {
        setSelectedData(prev => ({ ...prev, stages }));
    };

    const handleStatesUpdate = (states: string[]) => {
        setSelectedData(prev => ({ ...prev, states }));
    };

    const handleProjectTypeUpdate = (projects: string[]) => {
        setSelectedData(prev => ({ ...prev, projectTypes: projects }));
    };

    const handleMinTotalKWUpdate = (minTotalKW: number) => {
        setSelectedData(prev => ({
            ...prev,
            totalKW: {
                ...prev.totalKW,
                minTotalKW,
            },
        }));
    };

    const handleMaxTotalKWUpdate = (maxTotalKW: number) => {
        setSelectedData(prev => ({
            ...prev,
            totalKW: {
                ...prev.totalKW,
                maxTotalKW,
            },
        }));
    };

    const handleFilterChange = (filter: string | null) => {
        setActiveFilter(filter);
    };

    return {
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
    };
};

export default useFilter;
