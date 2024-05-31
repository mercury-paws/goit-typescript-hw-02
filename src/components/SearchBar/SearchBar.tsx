import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";


export type Props = {
  onSubmit: (query: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const notify = () =>
    toast.error("please, fill in the input search field", {
      style: {
        border: "1px solid red",
        padding: "16px",
        color: "red",
      },
      iconTheme: {
        primary: "red",
        secondary: "#FFFAEE",
      },
    });

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchQuery = (event.target as HTMLFormElement).elements["query"]
      .value;
    if (!searchQuery.trim()) {
      return notify();
    }
    onSubmit(searchQuery);
    event.currentTarget.reset();
  };

  return (
    <>
      <div>
        <Toaster />
      </div>

      <header>
        <form onSubmit={handleSearch} className={css.inputForm}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            className={css.inputField}
          />
          {/* <button
              type="submit"
              className={css.searchIconBtn}
              onSubmit={handleSearch}
            >
              <ImSearch className={css.searchIcon} />
            </button> */}
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </form>
      </header>
    </>
  );
}
