import React from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import './Slider.scss';

interface SliderProps {
    values: {
        minValue: number;
        maxValue: number;
    };
    setValues: (values: { minValue: number; maxValue: number }) => void;
    ranges: {
        min: number;
        max: number;
    };
}

const Slider: React.FC<SliderProps> = ({ values, setValues, ranges }) => {
    return (
        <MultiRangeSlider
            min={ranges.min}
            max={ranges.max}
            minValue={values.minValue}
            maxValue={values.maxValue}
            ruler={false}
            label={false}
            baseClassName="slider"
            onInput={(e: ChangeResult) => {
                setValues({ minValue: e.minValue, maxValue: e.maxValue });
            }}
        />
    );
};

export default Slider;
