import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecentProducts = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        const fetchRecentProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/recent-products`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error al obtener los productos recientes:', error);
            }
        };

        fetchRecentProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Productos Recientes</h1>
            <div className="grid grid-cols-4 gap-4">
                {currentProducts.map((product, index) => (
                    <div key={product.id} className="border p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                        <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2 rounded-lg" />
                        <p className="text-lg font-semibold mb-1">{product.name}</p>
                        <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                        <p className="text-red-500 font-semibold">${product.price}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {products.length > productsPerPage && (
                    <div>
                        {[...Array(Math.ceil(products.length / productsPerPage))].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} transition-colors duration-300 hover:bg-blue-600 hover:text-white`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecentProducts;