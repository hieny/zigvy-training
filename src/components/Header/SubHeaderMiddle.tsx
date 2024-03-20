import SearchSVG from "../../assets/SearchSVG";

export default function SubHeaderMiddle() {
  return (
    <div className="header_sub_middle">
      <div>
        <label>Where</label>
        <input type="text" placeholder="Search destinations" />
      </div>
      <span className="divider"></span>
      <div>
        <label>Check in</label>
        <p>Add dates</p>
      </div>
      <span className="divider"></span>
      <div>
        <label>Check out</label>
        <p>Add dates</p>
      </div>
      <span className="divider"></span>
      <div>
        <div>
          <label>Who</label>
          <p>Add guests</p>
        </div>
        <div className="search">
          <SearchSVG />
        </div>
      </div>
    </div>
  );
}
