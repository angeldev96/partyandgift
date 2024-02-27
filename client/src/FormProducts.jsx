// ProductForm.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Necesitarás axios para hacer peticiones HTTP al backend

function FormProducts() {
  const [productData, setProductData] = useState({
    title: '',
    quantity: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Envía los datos del producto al backend
      await axios.post('http://localhost:3001/products', productData);
      alert('Producto registrado exitosamente');
      // Limpia el formulario después de enviar los datos
      setProductData({ title: '', quantity: '' });
    } catch (error) {
      console.error('Error al registrar el producto:', error);
      alert('Error al registrar el producto');
    }
  };

  return (
    <div>
      <h2>Registrar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Cantidad:</label>
          <input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Registrar Producto</button>
      </form>
    </div>
  );
}

export default FormProducts;
