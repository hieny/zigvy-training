import Switcher from "../../../../components/Switcher/Switcher";
import "./taxFilter.scss";

export default function TaxFilter() {
  return (
    <div className="btnTax">
      <button>
        Display total before taxes
      </button>
        <Switcher />
    </div>
  );
}
