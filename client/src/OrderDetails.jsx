import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const token = localStorage.getItem("token");
                const url = `${import.meta.env.VITE_API_URL}/order-details/${orderId}`;
                const response = await axios.get(url, {
                    headers: {
                        Authorization: token,
                    },
                });

                setOrderDetails(response.data.orderDetails);
                setItems(Array.isArray(response.data.items) ? response.data.items : []);
            } catch (err) {
                setError("Error al obtener detalles de la orden");
                console.error("Error específico:", err.response || err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (loading) return <div className="text-center text-lg">Loading...</div>;
    if (error) return <div className="text-red-500 text-center text-lg">{error}</div>;

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.12; // 12% de IVA
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800">Detalles de la Orden: {orderId}</h1>
            <h2 className="text-xl text-gray-700">Estado de la Orden: {orderDetails?.status}</h2>
            <h3 className="text-lg text-gray-600">
                Fecha de la Orden:{" "}
                {orderDetails?.created_at ? new Date(orderDetails.created_at).toLocaleString() : "Fecha no disponible"}
            </h3>
            <div className="mt-5">
                <h2 className="text-xl font-semibold text-gray-800">Productos</h2>
                <table className="min-w-full table-auto leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Producto
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Cantidad
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Precio Unitario
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Subtotal
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.product_id}>
                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    {item.product_name}
                                </td>
                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    {item.quantity}
                                </td>
                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    L.{item.price}
                                </td>
                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    L.{item.price * item.quantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">Subtotal: L.{subtotal}</h3>
                    <h3 className="text-lg font-semibold text-gray-800">Impuesto (12%): L.{tax.toFixed(2)}</h3>
                    <h3 className="text-lg font-semibold text-gray-800">Total: L.{total.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
