import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

type Item = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  user: {
    bio: string;
    location: string;
    total_photos: number;
  };
};
type Props = {
  items: Item[];
  onImageClick: (imageUrl: string) => void;
};

export default function ImageGallery({ items, onImageClick }: Props) {
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
