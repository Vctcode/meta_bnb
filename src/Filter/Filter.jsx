// Style
import "./Filter.css"
// Image
import Settings from "../assets/setting-5.png"

export default function Filter() {
    return (
        <div className="filter">
            <div className="filter-item">
                <FilterItem item="Resturant" />
                <FilterItem item="Cottage" />
                <FilterItem item="Catle" />
                <FilterItem item="fantast city" />
                <FilterItem item="beach" />
                <FilterItem item="Carbins" />
                <FilterItem item="Off-grid" />
                <FilterItem item="Farm" />
            </div>

            <div className="filter-button">
                Location
                <img src={Settings} alt="" />
            </div>
        </div>
    )
}

const FilterItem = (props) => {
    return (
        <div className="f-item">{props.item}</div>
    )
}