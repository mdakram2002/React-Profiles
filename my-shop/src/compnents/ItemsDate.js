import './ItemsDate.css'

function ItemsDate(props) {

    const day = props.day;
    const months = props.months;
    const year = props.year;
    return (
        <div className="mfgDate">
            <span>{day}</span>
            <span>{months}</span>
            <span>{year}</span>
        </div>
    );

}
export default ItemsDate;