import { CategoryType } from "@/services/queries/home/home.type";
import React from "react";

type CategoryTypeProps = {
  data: CategoryType[];
  activeCate: string | undefined;
  setCategories: (name: string) => void;
  refContent: React.RefObject<HTMLDivElement>;
};
export default function CategoriesData({
  data,
  activeCate,
  setCategories,
  refContent,
}: CategoryTypeProps) {
  return (
    <div className="categories_content" ref={refContent}>
      {data &&
        data.map((item) => (
          <div
            className={`${
              activeCate === item._id
                ? "categories_active"
                : "categories_inactive"
            }`}
            key={item._id}
            onClick={() => setCategories(item._id)}
          >
            <div className="categories_content_data">
              <img src={item.iconUrl} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
