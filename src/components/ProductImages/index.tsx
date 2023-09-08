import React, { useState } from 'react';
import "./index.scss";

const ProductImages = () => {
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [currentImg, setCurrentImg] = useState(1);
  const imgNum = 4;

  const handlePrevImg = () => {
    if (currentImg - 1 === 0) {
      setCurrentImg(imgNum);
    } else {
      setCurrentImg((prevImg) => prevImg - 1);
    }
  }

  const handleNextImg = () => {
    if (currentImg + 1 > imgNum ) {
      setCurrentImg(1);
    } else {
      setCurrentImg((prevImg) => prevImg + 1);
    }
  }

  return (
    <div>
      <div className="products-container">
        <div className="main-image">
          <img onClick={handlePrevImg} src="icon-previous.svg" alt="Icon Previous" className='icon prev-icon'/>
          <img src={`image-product-${currentImg}.jpg`} alt="Main Product Image" />
          <img onClick={handleNextImg} src="icon-next.svg" alt="Icon Next" className='icon next-icon'/>
        </div>
        <div className="other-images d-none d-lg-flex justify-content-between">
        {
          Array.from({ length: imgNum }).map((_, i) => (
            <img onClick={() => setCurrentImg(i + 1)} src={`image-product-${i + 1}-thumbnail.jpg`} alt={`Product Thumbnail ${i + 1}`} key={i + 1} />
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default ProductImages;