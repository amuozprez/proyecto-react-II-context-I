import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import IconHeart from '../components/IconHeart';

const Favorites = () => {
  const { photos, toggleFavorite } = useContext(PhotoContext);

  const favoritePhotos = photos.filter(photo => photo.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map(photo => (
          <div key={photo.id} className="photo">
            <img
              src={photo.src.medium}
              alt={photo.alt}
              className="photo-img"
              onClick={() => toggleFavorite(photo.id)}
            />
            <button className="favorite-btn" onClick={() => toggleFavorite(photo.id)}>
              <IconHeart filled={photo.liked} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
