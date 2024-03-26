import Categories from "../Categories";
import TaxFilter from "../taxFilter/TaxFilter";
import FilterType from "../typeFilter/FilterType";
import "./index.scss";

export default function HomeFilter() {
  return (
    <div className="home_filter_content">
      <Categories />
      <div className="home_filter_content_left_content">
        <FilterType />
        <TaxFilter />
      </div>
    </div>
  );
}
