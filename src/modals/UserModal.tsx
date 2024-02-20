import { useState } from 'react';
import { User } from '../components/UserList';
type UserModalProps = {
  user?: User;
  onClose: () => void;
  isOpen: boolean;
  onCreate: (user: User) => void;
  onModify: (user: User) => void;
};

const UserModal = (props: UserModalProps) => {
  const user = props.user ? props.user : null;
  const onClose = props.onClose;
  const onModify = props.onModify;
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [dob, setDob] = useState(user?.DOB || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');

  const getUser = () => {
    return {
      id: user?.id || '',
      name: name,
      email: email,
      DOB: new Date(dob),
      phone: phone,
      avatar: avatar,
    };
  };

  return user != null ? (
    <form className="p-6 space-y-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold"> Thay đổi thông tin người dùng</h2>
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
          <input type="date" value={dob as string} onChange={(e) => setDob(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
            console.log(user);
            onModify(user);
            onClose();
          }}
          className="px-4 py-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white"
        >
          Lưu thay đổi
        </button>
      </div>
    </form>
  ) : (
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
          <input type="date" value={dob as string} onChange={(e) => setDob(e.target.value)} className="w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
            console.log(user);
            props.onCreate(user);
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
export default UserModal;
