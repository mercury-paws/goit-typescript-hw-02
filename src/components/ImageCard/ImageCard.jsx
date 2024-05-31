import css from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {
  return (
    <div className={css.imageCard}>
      <div className={css.imageBlock}>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          onClick={() => onImageClick(image.urls.regular)}
        />
      </div>
      <div>
        <p className={css.description}>Description: {image.description}</p>
        <p className={css.about}>About photographer: {image.user.bio}</p>
        <p className={css.location}>Location: {image.user.location}</p>
        <p className={css.totalPhotos}>
          Total photos made: {image.user.total_photos}
        </p>
      </div>
    </div>
  );
}
