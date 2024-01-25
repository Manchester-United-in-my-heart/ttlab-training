import { useState } from 'react';
import { SideBar } from '../fragments/side-bar';
import ProductPage from './product-page';
import UserPage from './user-page';
import { Phone } from '../components/UserList';
import NotificationBell from '../components/notification-bell';
import Badge from '../components/badge';
import SearchBox from '../components/search.tsx';
import { GoPlus } from 'react-icons/go';
import NewUserModal from '../modals/NewUserModal.tsx';
import NewProductModal from '../modals/NewProductModal.tsx';
import { searchProduct, searchUser } from '../helper/utils.ts';

export default function Root() {
  const View = {
    USER: 'USER',
    PRODUCT: 'PRODUCT',
  };

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const DummyActiveUser = {
    userName: 'Nguyễn Văn A',
    userEmail: '123@gmail.com',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    userState: 'online',
  };

  const numberOfNotifications = 10;

  const DummyUserList = [
    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },

    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Nguyễn Văn A',
      email: '123@gmail.com',
      DOB: new Date('2000-01-01'),
      phone: new Phone('0123456789'),
    },
  ];

  const DummyProductList = [
    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },

    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },

    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },

    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },

    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },

    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },

    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },

    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },

    {
      name: 'Sản phẩm 1',
      price: 200000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Sản phẩm 1',
      price: 300000,
      quantity: 10,

      description: 'Lorem Ipsum 1234',
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Sản phẩm 1',
      price: 400000,
      quantity: 10,

      description: 'Mô tả sản phẩm 1',
      image: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  const [filteredProductList, setFilteredProductList] = useState(DummyProductList);
  const [filteredUserList, setFilteredUserList] = useState(DummyUserList);
  const [view, setView] = useState(View.USER);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  return (
    <>
      <div className="relative top-0 left-0 w-full h-full min-h-screen box-border">
        {/* User Modal */}
        {isUserModalOpen && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-[#342b2b53] z-10 flex items-center justify-center">
            <div className="mx-auto my-auto">
              <NewUserModal isOpen={isUserModalOpen} onClose={() => setIsUserModalOpen(false)} />
            </div>
          </div>
        )}
        {/* Product Modal */}
        {isProductModalOpen && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-[#342b2b53] z-10 flex items-center justify-center">
            <div className="mx-auto my-auto">
              <NewProductModal isOpen={isProductModalOpen} onClose={() => setIsProductModalOpen(false)} />
            </div>
          </div>
        )}
        <div className={`relative w-full h-full bg-[#F1F2F6] ${isSideBarOpen ? 'grid grid-flow-col grid-cols-[1fr_7fr] gap-[10px]' : 'flex gap-[10px]'} overflow-x-hidden`}>
          <SideBar view={view} setView={setView} isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
          <div className={`${!isSideBarOpen && 'w-full'} ml-[10px] mr-[10px] pt-[10px]`}>
            <div className="flex justify-between">
              <div className={`font-semibold`}>{view === View.PRODUCT ? `Danh sách sản phẩm` : view === View.USER && `Danh sách người dùng`} </div>
              <div className="flex gap-[15px]">
                <NotificationBell numberOfNotifications={numberOfNotifications} />
                <Badge userName={DummyActiveUser.userName} userEmail={DummyActiveUser.userEmail} userAvatar={DummyActiveUser.userAvatar} userState={DummyActiveUser.userState} />
              </div>
            </div>
            <div className="flex justify-between mt-[20px] mb-[10px]">
              <SearchBox
                onSearch={
                  view === View.PRODUCT
                    ? (value) => {
                        console.log(view, value);
                        setFilteredProductList(searchProduct(DummyProductList, value));
                      }
                    : view === View.USER &&
                      ((value) => {
                        console.log(view, value);
                        setFilteredUserList(searchUser(DummyUserList, value));
                      })
                }
              />
              {view === View.PRODUCT ? (
                <button
                  className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2 flex flex-row gap-4 justify-center items-center"
                  onClick={() => {
                    setIsProductModalOpen(true);
                  }}
                >
                  <div className="inline">
                    <GoPlus size={20} />
                  </div>
                  <div>Tạo mới</div>
                </button>
              ) : (
                view === View.USER && (
                  <button
                    className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2 flex flex-row gap-4 justify-center items-center"
                    onClick={() => {
                      setIsUserModalOpen(true);
                    }}
                  >
                    <div className="inline">
                      <GoPlus size={20} />
                    </div>
                    <div>Tạo mới</div>
                  </button>
                ) 
              )}
            </div>
            <div className="bg-white p-5 rounded-xl">{view === View.PRODUCT ? <ProductPage productList={filteredProductList} /> : view === View.USER && <UserPage users={filteredUserList} />}</div>
          </div>
        </div>
      </div>
    </>
  );
}
