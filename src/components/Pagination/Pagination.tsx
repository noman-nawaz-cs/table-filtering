import angleDown from '../../assets/icons/angle-down.png';
import classes from './Pagination.module.scss';
const Pagination: React.FC = () => {
    return (
        <div className={classes.PaginationWrapper}>
            <div className={classes.ShowEntries}>
                <span>Show </span>
                <span>15 </span>
                <img src={angleDown} alt='Angle Down'/>
                <span> of </span>
                <span>41</span>
            </div>
            <div>Page No. Here</div>
        </div>
    );
};

export default Pagination;