import "./index.scss";

import { useGetPlaces } from "@/services/queries/home/home.query.ts";
import CardContent from "./components/CardContent.tsx";
import { useCallback, useRef } from "react";

export default function Contents() {
  const observer = useRef<IntersectionObserver>();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useGetPlaces();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (!isLoading && hasNextPage) {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && !isFetchingNextPage) {
            fetchNextPage();
          }
        });
        if (node) observer.current.observe(node);
      }
    },
    [isLoading, hasNextPage, isFetchingNextPage, fetchNextPage]
  );

  return (
    <div>
      {data &&
        data.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="contents">
            {page.data.map((item, itemIndex) => (
              <CardContent key={itemIndex} item={item} />
            ))}
            {pageIndex === data.pages.length - 1 && page.data.length > 0 && (
              <div ref={lastElementRef}></div>
            )}
          </div>
        ))}
      {isFetching && <p className="loading">Loading...</p>}
    </div>
  );
}
