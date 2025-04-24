

import React from "react";

export const Card = (currentProduct) => {
  const { id, title, category, price, description,image,rating } = currentProduct;


  return (

    <div className="mt-2 max-w-sm mx-auto border border-solid rounded-lg p-4 bg-gray-50 shadow-lg text-blue-700">
      {/* Título del producto */}
      <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>

      {/* id */}
      <p className="text-sm font-medium mb-1">
        ID: <span className="font-normal">{id}</span>
      </p>

      {/* Categoría */}
      <p className="text-sm font-medium mb-1">
        Categoría: <span className="font-normal">{category}</span>
      </p>

      {/* Precio */}
      <p className="text-sm font-medium mb-1">
        Precio: <span className="font-normal">{price}</span>
      </p>

      {/* imagen*/}
      <img src={image} alt={id} />

      {/* Descripción */}
      <p className="text-sm font-medium mb-1">
        Descripción: <span className="font-normal">{description}</span>
      </p>

      {/* clasificacion */}
      <p className="text-sm font-medium mb-1">
        clasificacion: <span className="font-normal">{rating}</span>
      </p>
    </div>
  );
};
