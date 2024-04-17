import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PurchaseOrders = () => {
    const [ordenes, setOrdenes] = useState([]);

    const eliminarOrden = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/orders/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setOrdenes(ordenes.filter(orden => orden.id !== id));
            }
        } catch (error) {
            console.error('Error al eliminar el pedido:', error);
        }
    };

    useEffect(() => {
        const fetchOrdenes = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`);
            const data = await response.json();
            setOrdenes(data);
        };
        fetchOrdenes();
    }, []);

    return (
        <div className="m-4 p-4 bg-gray-200 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Órdenes de Compra</h2>

            <Link to="/new-order" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 inline-block">Agregar Orden</Link>

            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-300">Proveedor</th>
                        <th className="px-4 py-2 bg-gray-300">Productos</th>
                        <th className="px-4 py-2 bg-gray-300">Fecha</th>
                        <th className="px-4 py-2 bg-gray-300">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ordenes.map(orden => (
                        <tr key={orden.id} className="border-b">
                            <td className="px-4 py-2">{orden.provider_id}</td>
                            <td className="px-4 py-2">{orden.products.map(prod => `${prod.product_id} - ${prod.quantity}`).join(', ')}</td>
                            <td className="px-4 py-2">{orden.date}</td>
                            <td className="px-4 py-2">
                                <Link to={`/edit-order/${orden.id}`} className="text-blue-500 mr-2">Editar</Link>
                                <button onClick={() => eliminarOrden(orden.id)} className="text-red-500">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PurchaseOrders;