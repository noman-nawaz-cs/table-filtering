
export interface Header {
    label: string;
    fieldName: string;
    type: string;
}


export interface Data {
    Name: string;
    StageName: string;
    Project_Address__StateCode__s: string;
    Total_kW: number;
    Project_Type__c: string;
    Solution__c: string;
    Offtake_Type__c: string;
}

export interface DataRow {
    [key: string]: string | number; 
}

export interface SelectedData {
    stages: string[];
    states: string[];
    projectTypes: string[];
    totalKW: {
        minTotalKW: number;
        maxTotalKW: number;
    };
};
