export default function CategoriesSkeleton() {
  const skeletonItems = Array.from({ length: 20 }, (_, index) => (
    <div key={index}>
      <div className="categories_content_data">
        <div className="img_cate_skeleton"></div>
        <p className="name_cate_skeleton"></p>
      </div>
    </div>
  ));

  return <div className="categories_content">{skeletonItems}</div>;
}
