import { useState } from 'react';
import {User} from '../components/UserList';
type NewUserModalProps = {
  onClose: () => void;
  isOpen: boolean;
  onCreated: (user: User) => void;
};

const NewUserModal = (props: NewUserModalProps) => {
  const onClose = props.onClose;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState('');

  const getUser = () => {
    return {
      name: name,
      email: email,
      DOB: new Date(dob),
      phone: phone ,
      avatar: avatar,
    };
  };

  return (
    <form className="p-6 space-y-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold">Tạo mới người dùng</h2>
      <div className="space-y-2">
        <label className="block">
          <span className="text-sm text-gray-700">Tên người dùng *</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-700">Email *</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-700">Ngày sinh *</span>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-700">Số điện thoại *</span>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-700">Avatar *</span>
          <input type="url" value={avatar} onChange={(e) => setAvatar(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => {
            onClose();
          }}
          className="px-4 py-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white"
        >
          Hủy
        </button>
        <button
          type="button"
          onClick={() => {
            const user = getUser();
            console.log(user)
            props.onCreated(user);
            onClose();
          }}
          className="px-4 py-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white"
        >
          Tạo mới
        </button>
      </div>
    </form>
  );
};

export default NewUserModal;
