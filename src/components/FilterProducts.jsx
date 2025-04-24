import React, { useState, useContext } from 'react';
import { Card } from '../components/Card'; // ¡Este es el correcto!
import { ProductosContext } from '../Api/ProductosContext';

export const FilterProducts = () => {
  const { productos } = useContext(ProductosContext);
  const [name, setName] = useState('');

  const filteredProducts = productos.filter((product) =>
    product.title.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Buscar Productos</h2>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Buscar por nombre</label>
          <input
            type="text"
            placeholder="Escribe el nombre del producto..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} producto={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};
