import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={css.lipic}>
            <div>
              <ImageCard image={item} onImageClick={onImageClick} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
