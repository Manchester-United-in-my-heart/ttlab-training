import { useState } from 'react';
import {Product} from "../components/ProductList.tsx";
type NewProductModalProps = {
  onClose: () => void;
  isOpen: boolean;
  onCreated: (product: Product) => void;
};

const NewProductModal = (props: NewProductModalProps) => {
  const onClose = props.onClose;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const getProduct = () => {
    return {
      name: name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      description: description,
      image: image,
    };
  };

  return (
    <form className="p-6 space-y-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold">Tạo mới sản phẩm</h2>
      <div className="space-y-2">
        <label className="block">
          <span className="text-sm text-gray-700">Tên sản phẩm*</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-700">Giá*</span>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-700">Số lượng*</span>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-700">Mô tả</span>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-700">Ảnh sản phẩm*</span>
          <input type="url" value={image} onChange={(e) => setImage(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => {
            onClose();
          }}
          className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
        >
          Hủy
        </button>
        <button
          type={'button'}
          onClick={() => {
            const product = getProduct();
            props.onCreated(product);
            onClose();
          }}
          className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
        >
          Tạo mới
        </button>
      </div>
    </form>
  );
};

export default NewProductModal;
