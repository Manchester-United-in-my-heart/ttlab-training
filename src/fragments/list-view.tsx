import { User } from '../components/UserList';
import { Product } from '../components/ProductList';
import ProductPage from '../routes/product-page.tsx';
import UserPage from '../routes/user-page.tsx';
import NotificationBell from '../components/notification-bell';
import Badge from '../components/badge';
import SearchBox from '../components/search.tsx';
import { GoPlus } from 'react-icons/go';
import NewUserModal from '../modals/NewUserModal.tsx';
import NewProductModal from '../modals/NewProductModal.tsx';
type ListViewProps = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (isSideBarOpen: boolean) => void;
  dummyActiveUser: {
    userName: string;
    userEmail: string;
    userAvatar: string;
    userState: 'online' | 'offline';
  };
  numberOfNotifications: number;
  dummyUsers: User[];
  dummyProducts: Product[];

  view: 'USER' | 'PRODUCT';
  setView: (view: 'USER' | 'PRODUCT') => void;

  filteredUsers: User[];
  setFilteredUsers: (filteredUsers: User[]) => void;
  filteredProducts: Product[];
  setFilteredProducts: (filteredProducts: Product[]) => void;

  isUserModalOpen: boolean;
  setIsUserModalOpen: (isUserModalOpen: boolean) => void;
  isProductModalOpen: boolean;
  setIsProductModalOpen: (isProductModalOpen: boolean) => void;

  searchUser: (users: User[], value: string) => User[];
  searchProduct: (products: Product[], value: string) => Product[];
};

export default function ListView(props: ListViewProps) {
  const View = {
    USER: 'USER',
    PRODUCT: 'PRODUCT',
  };
  const { isSideBarOpen, setIsSideBarOpen, dummyActiveUser, numberOfNotifications, dummyUsers, dummyProducts, view, setView, filteredUsers, setFilteredUsers, filteredProducts, setFilteredProducts, isUserModalOpen, setIsUserModalOpen, isProductModalOpen, setIsProductModalOpen, searchUser, searchProduct } = props;
  return (
    <div className={`${!isSideBarOpen && 'w-full'} ml-[10px] mr-[10px] pt-[10px]`}>
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
      <div className="flex justify-between">
        <div className={`font-semibold`}>{view === View.PRODUCT ? `Danh sách sản phẩm` : view === View.USER && `Danh sách người dùng`} </div>
        <div className="flex gap-[15px]">
          <NotificationBell numberOfNotifications={numberOfNotifications} />
          <Badge userName={dummyActiveUser.userName} userEmail={dummyActiveUser.userEmail} userAvatar={dummyActiveUser.userAvatar} userState={dummyActiveUser.userState} />
        </div>
      </div>
      <div className="flex justify-between mt-[20px] mb-[10px]">
        <SearchBox
          onSearch={(value) => {
            if (view === View.PRODUCT) {
              setFilteredProducts(searchProduct(dummyProducts, value));
            } else {
              setFilteredUsers(searchUser(dummyUsers, value));
            }
          }}
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
      <div className="bg-white p-5 rounded-xl">{view === View.PRODUCT ? <ProductPage productList={filteredProducts} /> : view === View.USER && <UserPage users={filteredUsers} />}</div>
    </div>
  );
}
