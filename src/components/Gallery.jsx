import React, { useContext, useEffect } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import IconHeart from './IconHeart';

const Gallery = () => {
  const { photos, setPhotos, toggleFavorite } = useContext(PhotoContext);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('/photos.json');
      const data = await response.json();
      setPhotos(data.photos);
    };

    fetchPhotos();
  }, [setPhotos]);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map(photo => (
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
  );
};

export default Gallery;
