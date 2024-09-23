import classes from './Label.module.scss'

export interface LabelProps {
    label: string;
}

const Label: React.FC<LabelProps> = ({ label }) => {
    return <label className={classes.Label}>{label}</label>;
};

export default Label;