import React, { useState,useEffect } from 'react';
import axios from 'axios';
import qs from 'qs'

const TemplateForm = () => {
  const [formData, setFormData] = useState({
    languageCode: 'es',
    content: 'hola',
    category: 'UTILITY',
    templateType: 'TEXT',
    elementName: 'testfront1221233',
    exampleHeader: 'test',
    example: 'hola',
    vertical: 'vertical',
  });

  useEffect(() => {
    // Decode the content field when the component mounts
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: decodeURIComponent(prevFormData.content),
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Use qs.stringify to encode the form data in x-www-form-urlencoded format
      const encodedParams = qs.stringify({
        languageCode: formData.languageCode,
        content: formData.content,
        category: formData.category,
        templateType: formData.templateType,
        elementName: formData.elementName,
        exampleHeader: formData.exampleHeader,
        example: formData.example,
        vertical: formData.vertical,
      });
  
      const response = await axios.post('http://localhost:3000/template', encodedParams, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
      <label className="block mb-2" htmlFor="languageCode">
        Language Code:
        <input
          type="text"
          id="languageCode"
          name="languageCode"
          value={formData.languageCode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="content">
        Content:
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="category">
        Category:
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="templateType">
        Template Type:
        <input
          type="text"
          id="templateType"
          name="templateType"
          value={formData.templateType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="elementName">
        Element Name:
        <input
          type="text"
          id="elementName"
          name="elementName"
          value={formData.elementName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="exampleHeader">
        Example Header:
        <input
          type="text"
          id="exampleHeader"
          name="exampleHeader"
          value={formData.exampleHeader}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="example">
        Example:
        <textarea
          id="example"
          name="example"
          value={formData.example}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="vertical">
        Vertical:
        <input
          type="text"
          id="vertical"
          name="vertical"
          value={formData.vertical}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default TemplateForm;
