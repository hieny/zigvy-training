import SearchSVG from "../../assets/SearchSVG";

export default function MiniHeaderMiddle() {
  return (
    <div className="mini_header_middle">
        <div>
            <p>Any Where</p>
        </div>
        <span className="divider"></span>
        <div>
            <p>Any Week</p>
        </div>
        <span className="divider"></span>
        <div>
            <p>Add guest</p>
            <span className="search">
                <SearchSVG/>
            </span>
        </div>
    </div>
  )
}
