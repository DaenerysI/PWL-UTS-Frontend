// ProductForm.js
import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ onAddProduct }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData);
    setFormData({
      title: "",
      description: "",
      price: "",
      imageFile: null,
    });
    setFormVisible(false);
  };

  return (
    <div className="product-form">
      <button onClick={() => setFormVisible(true)}>Add Product</button>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <label>Image:</label>
          <div className="file-input-wrapper">
            <input type="file" name="imageFile" onChange={handleChange} />
            <div className="file-input-button">Choose File</div>
          </div>

          <button type="submit">Add Product</button>
        </form>
      )}
    </div>
  );
};

export default ProductForm;
