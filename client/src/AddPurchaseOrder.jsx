import { useState, useEffect } from 'react';
import axios from 'axios';

const AddPurchaseOrder = () => {
    const [proveedores, setProveedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [selectedProveedor, setSelectedProveedor] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [ordenItems, setOrdenItems] = useState([]);

    // Función para cargar proveedores y productos
    useEffect(() => {
        const fetchProveedores = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/providers`);
                setProveedores(response.data);
            } catch (error) {
                console.error('Error al obtener proveedores:', error);
            }
        };

        const fetchProductos = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/product-list`);
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener la lista de productos:', error);
            }
        };

        fetchProveedores();
        fetchProductos();
    }, []);

    const agregarProducto = () => {
        const productToAdd = {
            product_id: selectedProduct,
            quantity: cantidad
        };
        setOrdenItems([...ordenItems, productToAdd]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Lógica para enviar la orden de compra con los items a la API
    };

    return (
        <div className="m-4 p-4 bg-gray-200">
            <h2 className="text-lg font-bold mb-4">Agregar Orden de Compra</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="proveedor">Proveedor:</label>
                    <select id="proveedor" value={selectedProveedor} onChange={(e) => setSelectedProveedor(e.target.value)}>
                        {proveedores.map(proveedor => (
                            <option key={proveedor.id} value={proveedor.id}>{proveedor.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="producto">Producto:</label>
                    <select id="producto" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                        {productos.map(producto => (
                            <option key={producto.product_id} value={producto.product_id}>{producto.name}</option>
                        ))}
                    </select>
                    <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                    <button type="button" onClick={agregarProducto}>+</button>
                </div>
                <div>
                    <h3>Productos agregados a la orden:</h3>
                    <ul>
                        {ordenItems.map((item, index) => (
                            <li key={index}>Producto ID: {item.product_id}, Cantidad: {item.quantity}</li>
                        ))}
                    </ul>
                </div>
                <button type="submit">Agregar Orden</button>
            </form>
        </div>
    );
};

export default AddPurchaseOrder;