import { useEffect, useState } from "react";
import axios from 'axios';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products'); // Hacer la solicitud para obtener los productos
        setProducts(response.data); // Establecer los productos en el estado
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    };

    fetchProducts(); // Llamar a la función para obtener los productos cuando el componente se monte
  }, []); // Usar un arreglo vacío como segundo argumento para asegurarse de que esta función solo se ejecute una vez

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title} - {product.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
