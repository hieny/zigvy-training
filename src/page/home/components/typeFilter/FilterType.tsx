import FilterSVG from "../../../../assets/FilterSVG";
import "./filterType.scss"
export default function FilterType() {
  return (
    <div>
        <button className="btnType">
            <FilterSVG/>
            <p>Filters</p>
        </button>
    </div>
  )
}
