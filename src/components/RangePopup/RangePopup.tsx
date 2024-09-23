import classes from './RangePopup.module.scss'
import Slider from '../Slider/Slider';
import InputField from '../InputField/InputField';
import { useState, useEffect } from 'react';

interface RangePopupProps {
    totalKW: {
        minTotalKW: number;
        maxTotalKW: number;
    };
    onMinTotalKWUpdate?: (minTotalKW: number) => void;
    onMaxTotalKWUpdate?: (maxTotalKW: number) => void;
}

const RangePopup: React.FC<RangePopupProps> = ({ totalKW, onMinTotalKWUpdate, onMaxTotalKWUpdate }) => {
    const ranges = {
        min: totalKW.minTotalKW,
        max: totalKW.maxTotalKW,
    };

    const [values, setValues] = useState<{ minValue: number; maxValue: number }>({
        minValue: ranges.min,
        maxValue: ranges.min,
    });

    const [tempValues, setTempValues] = useState<{ tempMin: string; tempMax: string }>({
        tempMin: ranges.min.toString(),
        tempMax: ranges.max.toString(),
    });

    
    useEffect(() => {
        setTempValues({ 
            tempMin: values.minValue.toString(), 
            tempMax: values.maxValue.toString() 
        });
    }, [values.minValue, values.maxValue]);

    
    useEffect(() => {
        if (onMinTotalKWUpdate) {
            onMinTotalKWUpdate(values.minValue);
        }
        if (onMaxTotalKWUpdate) {
            onMaxTotalKWUpdate(values.maxValue);
        }
    }, [values.minValue, values.maxValue]); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'min' | 'max') => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setTempValues((prev) => ({ ...prev, [field === 'min' ? 'tempMin' : 'tempMax']: value }));
        }
    };

    const handleBlur = (field: 'min' | 'max') => {
        const value = parseFloat(tempValues[field === 'min' ? 'tempMin' : 'tempMax']);
        if (field === 'min' && !isNaN(value) && value >= ranges.min && value <= values.maxValue) {
            setValues((prev) => ({ ...prev, minValue: value }));
        } else if (field === 'max' && !isNaN(value) && value <= ranges.max && value >= values.minValue) {
            setValues((prev) => ({ ...prev, maxValue: value }));
        } else {
            setTempValues((prev) => ({
                ...prev,
                [field === 'min' ? 'tempMin' : 'tempMax']: (field === 'min' ? values.minValue : values.maxValue).toString(),
            }));
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, field: 'min' | 'max') => {
        if (e.key === 'Enter') {
            handleBlur(field);
        }
    };

    return (
        <div className={classes.RangePopup}>
            <Slider
                values={values}
                setValues={setValues}
                ranges={ranges}
            />
            <InputField
                tempValues={tempValues}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleKeyPress={handleKeyPress}
            />
        </div>
    );
};

export default RangePopup;
