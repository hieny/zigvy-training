import CardContent from "./components/CardContent.tsx";
import { data } from "./data.ts";
import "./index.scss"
export default function Contents() {
  return <div className="contents">
    {data.map((item,index) => {
      return <CardContent item={item} key={index}/> 
    })}
  </div>;
}
