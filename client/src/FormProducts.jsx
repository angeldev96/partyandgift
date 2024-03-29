import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function FormProducts() {
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`);        if (!response.ok) {
          throw new Error('Error al obtener las categorías');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
        setError('Error al obtener las categorías');
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category_id: categoryId,
          name: title,
          quantity,
          image_url: image,
          /* Añadir los campos adicionales aquí si es necesario */
          description: description, // Ejemplo: descripción del producto
          price: price, // Ejemplo: precio del producto
          stock: quantity // Ejemplo: stock del producto
          // Puedes agregar más campos según sea necesario para tu aplicación
        }),
      });

      if (!response.ok) {
        throw new Error('Error al registrar el producto');
      }

      setSuccess(true);
      toast.success('Producto registrado con éxito!');

    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  }

  return (
    <>
      <ToastContainer />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registrar Producto
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Categoría
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  onChange={(e) => setCategoryId(e.target.value)}
                  value={categoryId}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  <option value="">Seleccionar Categoría</option>
                  {categories.map((category) => (
                    <option key={category.category_id} value={category.category_id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                Cantidad
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                URL de la imagen
              </label>
              <input
                id="image"
                name="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleChangeDescription}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Precio
              </label>
              <input
                id="price"
                name="price"
                type="number"
                value={price}
                onChange={handleChangePrice}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrar Producto
              </button>
            </div>



          </form>
        </div>
      </div>
    </>
  );
}

export default FormProducts;