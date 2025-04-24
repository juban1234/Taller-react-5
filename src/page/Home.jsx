import { useContext } from 'react';
import { ProductosContext } from '../Api/ProductosContext';
import { Card } from '../components/Card';

export const Home = () => {
  const { productos, loading } = useContext(ProductosContext);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
        <p> productos </p>
      {productos.map(producto => (
        <Card key={producto.id} producto={producto} />
      ))};
    </div>
  );
};
