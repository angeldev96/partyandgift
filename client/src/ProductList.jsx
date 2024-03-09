import  { useState, useEffect } from 'react';
import axios from 'axios';

import {
  ArchiveBoxIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/product_list');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    // TODO: Implement edit functionality
    console.log('Edit product:', product);
  };

  const handleDelete = (product) => {
    // TODO: Implement delete functionality (with confirmation)
    console.log('Delete product:', product);
  };

  const handleArchive = (product) => {
    // TODO: Implement archive functionality
    console.log('Archive product:', product);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.quantity}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>

              {/* Icon Actions */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"> 
                <button onClick={() => handleEdit(product)}>
                  <PencilSquareIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </button>
                <button onClick={() => handleDelete(product)}>
                  <TrashIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500" aria-hidden="true" />
                </button>
                <button onClick={() => handleArchive(product)}>
                  <ArchiveBoxIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-500" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
