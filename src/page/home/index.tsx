import HomeLayout from "../../layouts/HomeLayout";
import Contents from "./components/Contents";
import HomeFilter from "./components/filter/HomeFilter";
import MapContent from "./components/map/MapContent";

export default function HomePage() {
  return (
    <>
      <HomeLayout>
        <HomeFilter />
        <Contents />
        <MapContent />
      </HomeLayout>
    </>
  );
}
