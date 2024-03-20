import { categoriesData } from "./data";
import "./index.scss";
import { useRef, useState } from "react";

export default function Categories() {
  const [activeCate, setCategories] = useState<string>("Arctic");
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (ref.current) {
      const scrollAmount = 20;
      ref.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div className="categories">
      <button className="btn left" onClick={() => scroll(-5)}>
        ❮
      </button>
      <div className="categories_content" ref={ref}>
        {categoriesData.map((item, index) => (
          <div
            className={`${
              activeCate === item.name ? "categories_active" : "categories_inactive"
            }`}
            key={index}
            onClick={() => setCategories(item.name)}
          >
            <div>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn right" onClick={() => scroll(5)}>
        ❯
      </button>
    </div>
  );
}
