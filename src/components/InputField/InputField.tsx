import classes from './InputField.module.scss';
import Input from '../Input/Input';

interface InputFieldProps {
    tempValues: {
        tempMin: string;
        tempMax: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, field: 'min' | 'max') => void;
    handleBlur: (field: 'min' | 'max') => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>, field: 'min' | 'max') => void;
}

const InputField: React.FC<InputFieldProps> = ({
    tempValues,
    handleChange,
    handleBlur,
    handleKeyPress,
}) => {
    return (
<div className={classes.InputField}>
            <Input 
                label="Min" 
                value={tempValues.tempMin} 
                onChange={(e) => handleChange(e, 'min')} 
                onBlur={() => handleBlur('min')}
                onKeyDown={(e) => handleKeyPress(e, 'min')}
            />
            <span style={{ fontFamily: 'GothamMedium' }}>_</span>
            <Input 
                label="Max" 
                value={tempValues.tempMax} 
                onChange={(e) => handleChange(e, 'max')} 
                onBlur={() => handleBlur('max')}
                onKeyDown={(e) => handleKeyPress(e, 'max')}
            />
        </div>
    );
};

export default InputField;
