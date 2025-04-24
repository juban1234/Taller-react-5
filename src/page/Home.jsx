import { useContext } from 'react';
import { ProductosContext } from '../Api/ProductosContext';

export const Home = () => {
  const { productos, loading } = useContext(ProductosContext);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      {productos.map(producto => (
        <p key={producto.id}>{producto.title}</p>
      ))}
    </div>
  );
};
