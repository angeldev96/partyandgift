import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

import {
  ArchiveBoxIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Inicializar useNavigate
  const [currentPage, setCurrentPage] = useState(1);


  const goToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/product_list?page=${currentPage}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    };
    fetchProducts();
  }, [currentPage]);

  const handleEdit = (product) => {
    // TODO: Implement edit functionality
    navigate(`/product_edit/${product.product_id}`);
  };

  const handleDelete = async (product) => {
    try {
      // Realizar la solicitud DELETE al backend para eliminar el producto
      await axios.delete(`http://localhost:3001/products/${product.product_id}`);
      // Actualizar el estado para reflejar la eliminación del producto
      setProducts(products.filter(item => item.product_id !== product.product_id));
      // Mostrar una notificación de éxito
      toast.success('Producto eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el producto client:', error);
    }
  };

  const handleArchive = (product) => {
    // TODO: Implement archive functionality
    console.log('Archive product:', product);
  };

  return (
    <>
    <ToastContainer />
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.product_id} className="group relative bg-white overflow-hidden rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
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
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-500 mt-2">{product.description}</p>
                <p className="text-gray-500 mt-2">Precio: ${Number(product.price).toFixed(2)}</p>
                <p className="text-gray-500 mt-2">Cantidad disponible: {product.stock}</p>
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

        <div className="mt-6">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2">Anterior</button>
          <button onClick={() => goToPage(currentPage + 1)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Siguiente</button>
        </div>
      </div>
    </div>
    </>

    
  );
};

export default ProductList;
