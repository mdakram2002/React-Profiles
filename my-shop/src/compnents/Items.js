import './Items.css'

function Items(props) {
    const itemsName = props.name;
    return (
        <div>
            <p className="nirma">{itemsName}</p>
            {props.children}
        </div>
    )
}
export default Items;