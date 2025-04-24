
import React, { useEffect, useState } from 'react'
import { BuscarProductos } from '../components/BuscarProductos';


export const Product = () => {
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setProductos(data);
        })
        .catch(error => console.error('Error:', error));
    }, []);

    return (
    <>
        <BuscarProductos
          productos={productos}
        />
    </>
  )
}

