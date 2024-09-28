import React from "react";
import './Filters.css'


const Filters = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHander(title) {
        setCategory(title)
    }

    return (
        <div className="filter ">
            {filterData.map((data) => {
                return (
                    <button className={`btn-filter ${category === data.title} ?
                    "bg-opacity-60 border-white" :
                    "bg-opacity-40 border-transparent"`}
                        onClick={() => filterHander(data.title)}
                        key={data.id}>
                        {data.title}
                    </button>
                );
            })}
        </div>
    );
}
export default Filters;