import './InputField.scss';
import Input from '../Input/Input';

interface InputFieldProps {
    min: number;
    max: number;
    minRange: number;
    maxRange: number;
    tempMin: string;
    tempMax: string;
    handleMinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMinBlur: () => void;
    handleMaxBlur: () => void;
    handleMinKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleMaxKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    min,
    max,
    minRange,
    maxRange,
    tempMin,
    tempMax,
    handleMinChange,
    handleMaxChange,
    handleMinBlur,
    handleMaxBlur,
    handleMinKeyPress,
    handleMaxKeyPress
}) => {
    return (
        <div className='InputField'>
            <Input 
                label="Min" 
                value={tempMin} 
                onChange={handleMinChange} 
                min={minRange} 
                max={max} 
                onBlur={handleMinBlur}
                onKeyDown={handleMinKeyPress}
            />
            <span style={{ fontFamily: 'GothamMedium' }}>_</span>
            <Input 
                label="Max" 
                value={tempMax} 
                onChange={handleMaxChange} 
                min={min} 
                max={maxRange} 
                onBlur={handleMaxBlur}
                onKeyDown={handleMaxKeyPress}
            />
        </div>
    );
};

export default InputField;
