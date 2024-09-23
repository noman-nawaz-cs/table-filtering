import { Data,DataRow } from "../../types/DataType";

export const convertDataToDataRow = (data: Data[]): DataRow[] => {
    return data.map(item => ({
        Name: item.Name,
        StageName: item.StageName,
        Project_Address__StateCode__s: item.Project_Address__StateCode__s,
        Total_kW: item.Total_kW,
        Project_Type__c: item.Project_Type__c,
        Solution__c: item.Solution__c,
        Offtake_Type__c: item.Offtake_Type__c,
    }));
};