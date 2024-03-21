import { useState, useEffect } from 'react'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import axios from 'axios'






export default function Carrito() {
  const [showHeader, setShowHeader] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`, {
          headers: {
            Authorization: token,
          },
        });
        setCartItems(response.data);
      } catch (error) {
        console.error('Error al obtener los productos del carrito:', error);
      }
    };

    fetchCartItems();
  }, []);



  return (
    <div className="bg-white">
      {showHeader && (
        <header className="relative bg-white">
          <div className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            <p className="flex-grow text-center">
              Obtenga envio gratis a partir de compras mayores a L.200
            </p>
            <button
              className="ml-auto cursor-pointer"
              onClick={() => setShowHeader(false)}
            >
              <XMarkIconMini className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </header>
      )}

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Carrito de compra</h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Productos en el carrito
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {cartItems.map((item) => (
                <li key={item.item_id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                              {item.name}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{item.description}</p>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{item.price}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${item.item_id}`} className="sr-only">
                          Quantity, {item.name}
                        </label>
                        <select
                          id={`quantity-${item.item_id}`}
                          name={`quantity-${item.item_id}`}
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.item_id, parseInt(e.target.value))}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        >
                          {/* Opciones de cantidad */}
                        </select>

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.item_id)}
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <XMarkIconMini className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Resumen de compra
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">$99.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Costo de envio</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Impuesto</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$8.32</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Total</dt>
                <dd className="text-base font-medium text-gray-900">$112.32</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Proceder al pago
              </button>
            </div>
          </section>
        </form>


      </main>


    </div>
  )
}