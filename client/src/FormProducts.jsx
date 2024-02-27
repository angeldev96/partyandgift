import React, { useState } from 'react';
import axios from 'axios';

function FormProducts() {
  const [productData, setProductData] = useState({
    title: '',
    quantity: '',
    image: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (event) => {
    setProductData({ ...productData, image: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Encode image as base64 (replace with your preferred method if needed)
    const reader = new FileReader();
    reader.readAsDataURL(productData.image);
    reader.onloadend = async () => {
      const base64Image = reader.result;

      try {
        await axios.post('http://localhost:3001/products', {
          img: base64Image,
          ...productData, // Spread existing product data
        });
        alert('Producto registrado exitosamente');
        setProductData({ title: '', quantity: '', image: null }); // Reset form
      } catch (error) {
        console.error('Error al registrar el producto:', error);
        alert('Error al registrar el producto');
      }
    };
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
        <div>
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Registrar Producto</button>
      </form>
    </div>
  );
}

export default FormProducts;
