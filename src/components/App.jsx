import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import { fetchImages } from "../data-api";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleSearch = async (query) => {
    setQuery(query);
    console.log(query);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getPhotos() {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPhotos();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}

      {photos.length > 0 && (
        <ImageGallery items={photos} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImageUrl}
      />
    </>
  );
}
