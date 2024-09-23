export const getChipStyles = (label: string) => {
    switch (label) {
        case 'Pre-Contract':
            return { background: '#1D4289', color: '#ffffff' };
        case 'In Development':
            return { background: '#CCD4D7', color: '#1D4289' };
        case 'In Construction':
            return { background: '#F7BB39', color: '#002A3A' };
        case 'Operating':
            return { background: '#05A569', color: '#ffffff' };
        case 'Cancelled':
            return { background: '#EA0234', color: '#ffffff' };
        default:
            return { background: '#ddd', color: '#000' };
    }
};

export const getBackgroundColor = (stage: string) => {
    switch (stage) {
        case 'Pre-Contract':
            return '#1D4289';
        case 'In Development':
            return '#CCD4D7';
        case 'In Construction':
            return '#F7BB39';
        case 'Operating':
            return '#05A569';
        case 'Cancelled':
            return '#EA0234';
        default:
            return '#CCCCCC';
    }
};

export const getTextColor = (stage: string) => {
    switch (stage) {
        case 'Pre-Contract':
        case 'Operating':
        case 'Cancelled':
            return '#ffffff';
        case 'In Development':
        case 'In Construction':
            return '#002A3A';
        default:
            return '#000000';
    }
};