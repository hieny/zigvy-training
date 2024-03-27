import { useGetCategories } from "@/services/queries/home/home.query";
import { CategoryType } from "@/services/queries/home/home.type";
import { useEffect, useRef, useState } from "react";
import CategoriesData from "./CategoriesData";
import CategoriesSkeleton from "./CategoriesSkeleton";
import "./index.scss";

export default function Categories() {
  const { data, isLoading, isError, refetch } = useGetCategories();
  const [activeCate, setCategories] = useState<string | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);

  console.log("error", isError);
  let categoriesData: CategoryType[] = [];
  if (data) {
    categoriesData = data.data;
  }
  if (isError) {
    refetch();
  }

  const scroll = (direction: number) => {
    if (ref.current) {
      const scrollAmount = 20;
      ref.current.scrollLeft += direction * scrollAmount;
    }
  };

  useEffect(() => {
    if (data) {
      setCategories(data.data[0]._id);
    }
  }, [data]);

  return (
    <div className="categories">
      <button className="btn left" onClick={() => scroll(-5)}>
        ❮
      </button>
      {isLoading ? (
        <CategoriesSkeleton />
      ) : (
        <>
          {data && (
            <CategoriesData
              activeCate={activeCate}
              data={categoriesData}
              setCategories={setCategories}
              refContent={ref}
            />
          )}
        </>
      )}

      <button className="btn right" onClick={() => scroll(5)}>
        ❯
      </button>
    </div>
  );
}
