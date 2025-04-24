// BuscarProductos.jsx
import React from 'react';

export const BuscarProductos = ({ productos }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.title}</li>
        ))}
      </ul>
    </div>
  );
};
