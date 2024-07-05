import React, { createContext, useState } from 'react';

// Crear el contexto
export const PhotoContext = createContext();

// Crear el provider del contexto
export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  // Función para marcar/desmarcar fotos como favoritas
  const toggleFavorite = (id) => {
    setPhotos(photos.map(photo => 
      photo.id === id ? { ...photo, liked: !photo.liked } : photo
    ));
  };

  return (
    <PhotoContext.Provider value={{ photos, setPhotos, toggleFavorite }}>
      {children}
    </PhotoContext.Provider>
  );
};
