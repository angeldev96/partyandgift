import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${productId}`);
        const data = await response.json();
        setTitle(data.title);
        setQuantity(data.quantity);
        setImage(data.img);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        toast.error('Error al cargar el producto');
      }
    };

    fetchProduct();
  }, [productId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/products/${productId}`, {
        method: 'PUT', // Cambio principal aquí: usar PUT para actualizar
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, quantity, img: image }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el producto');
      }

      navigate('/'); // Opcional: redirecciona al usuario después de la actualización exitosa
    } catch (error) {
      console.error(error);
      toast.error('Error al actualizar el producto');

    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Editar Producto
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Título
              </label>
              <div className="mt-1">
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Cantidad
              </label>
              <div className="mt-1">
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Ruta de la Imagen
              </label>
              <div className="mt-1">
                <input
                  id="image"
                  name="image"
                  type="text"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Actualizar Producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
