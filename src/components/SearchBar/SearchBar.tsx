import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

import React, { useState } from "react";

export type Props = {
  onSubmit: (query: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

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
    if (!searchQuery.trim()) {
      return notify();
    }
    onSubmit(searchQuery);
    setSearchQuery(""); // Clear the input field
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </form>
      </header>
    </>
  );
}
