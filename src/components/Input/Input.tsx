import React from 'react';
import classes from './Input.module.scss';
import { LabelProps } from '../Label/Label';

interface InputProps extends LabelProps {
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void; 
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<InputProps> = ({ label, value, onChange, onBlur, onKeyDown }) => {
    return (
        <div className={classes.InputWrapper}>
            <label className={classes.InputLabel}>{label}</label>
            <input
                type="text"
                className={classes.Input}
                value={value}
                onChange={onChange}
                onBlur={onBlur} 
                onKeyDown={onKeyDown} 
            />
        </div>
    );
};

export default Input;
