
import Label from '../Label/Label';
import Checkbox from '../Checkbox/Checkbox';
import { LabelProps } from '../Label/Label';
import classes from './LabelCheckbox.module.scss'

interface LabelCheckboxProps extends LabelProps {
    className?: string; 
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const LabelCheckbox: React.FC<LabelCheckboxProps> = ({ label, className, checked, onChange }) => {
    return (
        <div className={`${classes.LabelCheckbox} ${className}`}>
            <Checkbox checked={checked} onChange={onChange} /> 
            <Label label={label} />
        </div>
    );
};

export default LabelCheckbox;
