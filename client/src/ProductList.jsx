/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios'; // Importa Axios para hacer peticiones HTTP

// Componente de tarjeta de producto
function ProductCard({ product }) {
  return (
    <a href={product.href} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </a>
  );
}

// Componente que muestra la lista de productos
function ProductList() {
  const [products, setProducts] = useState([]);

  // Función para obtener los productos del backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/product_list');
        if (Array.isArray(response.data)) { // Verificar si la respuesta es un array
          setProducts(response.data); // Establece los productos obtenidos del backend en el estado
        } else {
          console.error('La respuesta del backend no es un array:', response.data);
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Array.isArray(products) ? ( // Verificar si products es un array
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No hay productos disponibles.</p> // Mostrar un mensaje si no hay productos disponibles
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;