import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const products = [
  {
    id: 1,
    name: 'Cajita #1',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/caja4.jpg',
    imageAlt: 'Descp. Cajita de Regalo #1',
    price: 'L.120',
  },
  {
    id: 2,
    name: 'Cajita #2',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/caja5.jpg',
    imageAlt: 'Descp. Cajita de Regalo #2',
    price: 'L.120',
  },
  {
    id: 3,
    name: 'Cajita #3',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/cajita2.jpg',
    imageAlt: 'Descp. Cajita de Regalo #3',
    price: 'L.140',
  },
  {
    id: 4,
    name: 'Cajita #4',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/cajita5.jpg',
    imageAlt: 'Descp. Cajita de Regalo #4',
    price: 'L.165',
  },
  {
    id: 5,
    name: 'Peluche #1',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/peluche1.jpg',
    imageAlt: 'Peluche Grande',
    price: 'L.300',
  },
  {
    id: 6,
    name: 'Peliche #2',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/peluche2.jpg',
    imageAlt: 'Peluche Grande',
    price: 'L.300',
  },
  {
    id: 7,
    name: 'Carta #1',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/carta1.jpg',
    imageAlt: 'Descp. Carta de Regalo',
    price: 'L.130',
  },
  {
    id: 8,
    name: 'Carta #2',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/carta2.jpg',
    imageAlt: 'Descp. Carta de Regalo',
    price: 'L.130',
  },
  {
    id: 9,
    name: 'Arreglo #1',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/arreglo1.jpg',
    imageAlt: 'Descp. Arreglo Estilo #1',
    price: 'L.450',
  },
  {
    id: 10,
    name: 'Arreglo #2',
    color: '2 Colores',
    href: '#',
    imageSrc: './public/valentin/arreglo2.jpg',
    imageAlt: 'Descp. Arreglo Estilo #2',
    price: 'L.450',
  },
  {
    id: 11,
    name: 'Arreglo #3',
    color: 'Multicolor',
    href: '#',
    imageSrc: './public/valentin/arreglo3.jpg',
    imageAlt: 'Descp. Arreglo Estilo #3',
    price: 'L.450',
  },
];

const productsPerPage = 5;

export default function Plate() {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Productos</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Agregar al carrito<span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            <ChevronLeftIcon className="h-5 w-5 inline" />
            Anterior
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastProduct >= products.length}
            className="ml-2 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Siguiente
            <ChevronRightIcon className="h-5 w-5 inline" />
          </button>
        </div>
      </div>
    </div>
  );
}
