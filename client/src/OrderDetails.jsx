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
        // Obtener el token de autenticación del usuario
        const token = localStorage.getItem("token");

        // Enviar una solicitud al servidor para obtener los detalles de la orden
        const url = `${import.meta.env.VITE_API_URL}/order-details/${orderId}`;
        const response = await axios.get(url, {
          headers: {
            Authorization: token,
          },
        });
        console.log("Respuesta del servidor:", response.data); // Para depuración
        setOrderDetails(response.data.orderDetails);
        setItems(Array.isArray(response.data.items) ? response.data.items : []);
      } catch (err) {
        setError("Error al obtener detalles de la orden");
        console.error("Error específico:", err.response || err); // Mostrar más detalles
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const taxRate = 0.12; // 16% de IVA
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div>
      <h1>Detalles de la Orden: {orderId}</h1>
      <h2>Estado de la Orden: {orderDetails?.status}</h2>
      <h3>
        Fecha de la Orden:{" "}
        {orderDetails?.created_at
          ? new Date(orderDetails.created_at).toLocaleString()
          : "Fecha no disponible"}
      </h3>
      <div>
        <h2>Productos</h2>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.product_id}>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>L.{item.price}</td>
                <td>L.{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h3>Subtotal: L.{subtotal}</h3>
          <h3>Impuesto (12%): L.{tax.toFixed(2)}</h3>
          <h3>Total: L.{total.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
