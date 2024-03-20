import FooterInfo from "./components/FooterInfo";
import FooterSupport from "./components/FooterSupport";
import FooterType from "./components/FooterType";
import "./index.scss";

export default function Footer() {
  return (
    <>
      <FooterType />
      <FooterSupport />
      <FooterInfo/>
    </>
  );
}
