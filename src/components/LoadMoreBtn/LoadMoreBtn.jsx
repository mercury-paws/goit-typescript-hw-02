import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMore }) {
  return (
    <>
      <button className={css.button} onClick={loadMore} type="button">
        Load More
      </button>
    </>
  );
}
