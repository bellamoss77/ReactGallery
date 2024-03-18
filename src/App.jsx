//import React from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { images } from './gallery';
import { useState } from 'react';

function App() {
  const [likedImages, setLikedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    const image = images[currentIndex];
    if (!likedImages.some(likedImage => likedImage.id === image.id)) {
      setLikedImages([...likedImages, image]);
    }
  };

  const onSlide = (index) => {
    setCurrentIndex(index);
  }

    return (
        <div className="App">
            <ImageGallery items={images} showPlayButton={true} showFullscreenButton={true} slideDuration={500} onSlide={onSlide} />
            <div style={{ position: 'relative' }}>
              {images.map((image, index) => (
                <button
                key={index}
                className='like-button'
                onClick={handleLike}
                >
                  <i className='fa fa-heart'></i>
                </button>
              ))}
            </div>

            <select>
                {likedImages.map((image, index) => (
                  <option key={index} value={image.title}>
                    {image.title}
                  </option>
                ))}
            </select>
        </div>
    );
}

export default App;