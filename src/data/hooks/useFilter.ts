import { useState, useMemo, useEffect } from 'react';
import { Data } from '../../types/DataType';

export interface FilteredData {
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
            maxTotalKW: 0, 
        },
    });

    const [filteredData, setFilteredData] = useState<Data[]>([]);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);


    const filterBarData = useMemo(() => {
        return {
            stagesData: Array.from(new Set(data.map(item => item.StageName))),
            statesData: Array.from(new Set(data.map(item => item.Project_Address__StateCode__s))),
            projectTypesData: Array.from(new Set(data.map(item => item.Project_Type__c))),
            totalKW: {
                minTotalKW: Math.min(...data.map(item => item.Total_kW)),
                maxTotalKW: Math.max(...data.map(item => item.Total_kW)),
            },
        };
    }, [data]);

    useEffect(() => {
        filterData();
    }, [selectedData]);

    const filterData = () => {
        const { stages, states, projectTypes, totalKW } = selectedData;

        const filtered = data.filter((item: Data) => 
            ( stages.includes(item.StageName)) &&
            ( states.includes(item.Project_Address__StateCode__s)) &&
            ( projectTypes.includes(item.Project_Type__c)) &&
            (item.Total_kW >= totalKW.minTotalKW && item.Total_kW <= totalKW.maxTotalKW)
        );

        setFilteredData(filtered);
    };

    const handleUpdate = (key: keyof FilteredData, value: any) => {
        setSelectedData(prev => {
            if (key === 'totalKW') {
                return {
                    ...prev,
                    totalKW: { ...prev.totalKW, ...value },
                };
            }
    
            return {
                ...prev,
                [key]: value,
            };
        });
    };
    
    

    const handleFilterChange = (filter: string | null) => {
        setActiveFilter(filter);
    };

    return {
        selectedData,
        filteredData,
        activeFilter,
        filterBarData,
        handleUpdate,
        handleFilterChange,
    };
};

export default useFilter;
