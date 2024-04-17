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
        <div className="m-4 p-4 bg-gray-200">
            <h2 className="text-lg font-bold mb-4">Órdenes de Compra</h2>

            <Link to="/new-order">Agregar Orden</Link>

            <table className="mt-4 border">
                <thead>
                    <tr>
                        <th>Proveedor</th>
                        <th>Productos</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ordenes.map(orden => (
                        <tr key={orden.id}>
                            <td>{orden.provider_id}</td>
                            <td>{orden.products.map(prod => `${prod.product_id} - ${prod.quantity}`).join(', ')}</td>
                            <td>{orden.date}</td>
                            <td>
                                <Link to={`/edit-order/${orden.id}`}>Editar</Link>
                                <button onClick={() => eliminarOrden(orden.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PurchaseOrders;