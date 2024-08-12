import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import "./index.css"

const FilterItem = (props) => {
    const {details, onClickDown} = props
    const {id, label, value, isClicked} = details

    const onClickDropdown = () => {
        onClickDown(id)
    }

    return (
        <div className="single-filter-item">
        <div className="filter-item">
            <div>
                <p className="bold-text">{label}</p>
                <p>All</p>
            </div>
            <button className="drop-button" type="button" onClick={onClickDropdown}>
                {isClicked ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            
            
        </div> 
        {isClicked && (
                <div>
                    {value.map(eachValue => (
                        <div className="input-label">
                            <input type="checkbox" />
                            <label>{eachValue}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FilterItem 