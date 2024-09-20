import './RangePopup.scss';
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
    const [minValue, setMinValue] = useState<number>(totalKW.minTotalKW);
    const [maxValue, setMaxValue] = useState<number>(totalKW.maxTotalKW);

    const minRange = totalKW.minTotalKW;
    const maxRange = totalKW.maxTotalKW;

    const [tempMin, setTempMin] = useState(minValue.toString());
    const [tempMax, setTempMax] = useState(maxValue.toString());

    useEffect(() => {
        setTempMin(minValue.toString());
        setTempMax(maxValue.toString());
    }, [minValue, maxValue]);

    useEffect(() => {
        if (onMinTotalKWUpdate) {
            onMinTotalKWUpdate(minValue);
        }
        if (onMaxTotalKWUpdate) {
            onMaxTotalKWUpdate(maxValue);
        }
        console.log("Hello world!");
    },[minValue,maxValue]);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setTempMin(value);
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setTempMax(value);
        }
    };

    const handleMinBlur = () => {
        const value = parseFloat(tempMin);
        if (!isNaN(value) && value >= minRange && value <= maxValue) {
            setMinValue(value);
        } else {
            setTempMin(minValue.toString());
        }
    };

    const handleMaxBlur = () => {
        const value = parseFloat(tempMax);
        if (!isNaN(value) && value <= maxRange && value >= minValue) {
            setMaxValue(value);
        } else {
            setTempMax(maxValue.toString());
        }
    };

    const handleMinKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = parseFloat(tempMin);
            if (!isNaN(value) && value >= minRange && value <= maxValue) {
                setMinValue(value);
            } else {
                setTempMin(minValue.toString());
            }
        }
    };

    const handleMaxKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = parseFloat(tempMax);
            if (!isNaN(value) && value <= maxRange && value >= minValue) {
                setMaxValue(value);
            } else {
                setTempMax(maxValue.toString());
            }
        }
    };

    console.log(minValue, maxValue)

    return (
        <div className='RangePopup'>
            <Slider
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                min={minRange}
                max={maxRange}
            />
            <InputField
                min={minValue}
                max={maxValue}
                minRange={minRange}
                maxRange={maxRange}
                tempMin={tempMin} 
                tempMax={tempMax} 
                handleMinChange={handleMinChange}
                handleMaxChange={handleMaxChange}
                handleMinBlur={handleMinBlur}
                handleMaxBlur={handleMaxBlur}
                handleMinKeyPress={handleMinKeyPress}
                handleMaxKeyPress={handleMaxKeyPress}
            />
        </div>
    );
};

export default RangePopup;
