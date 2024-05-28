import { useState, useEffect } from "react";

const Card = ({ price, name, rating, image }) => {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
  }, [image]);

  if (!imageExists) {
    return null;
  }

  return (
    <div className="flex items-center justify-center flex-col bg-white min-h-fit h-120 w-80 m-2 rounded text-black p-2 shadow-lg">
      <span className="w-full h-full flex justify-center bg-gray-200 rounded p-8">
        <img src={image} alt={name} className="w-1/2 rounded" />
      </span>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-lg text-gray-600">Price: {price}</p>
        <div className="rating text-yellow-500 text-xl">
          {Array.from({ length: rating.average }, (_, index) => (
            <span key={index} className="star">
              &#9733;
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500">Reviews: {rating.reviews}</p>
      </div>
    </div>
  );
};

export default Card;
