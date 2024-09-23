import classes from './Checkbox.module.scss'

interface CheckboxProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean; 
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, checked }) => {
    return <input className={classes.CheckBox} type="checkbox" onChange={onChange} checked={checked} />;
};

export default Checkbox;