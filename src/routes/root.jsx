import { useState } from 'react';
import { SideBar } from '../fragments/side-bar';
import { searchProduct, searchUser } from '../helper/utils.ts';
import ListView from '../fragments/list-view.tsx';
import { DummyActiveUser, DummyProductList, DummyUserList, numberOfNotifications } from '../data/data.ts';

export default function Root() {
  const View = {
    USER: 'USER',
    PRODUCT: 'PRODUCT',
  };

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [filteredProductList, setFilteredProductList] = useState(DummyProductList);
  const [filteredUserList, setFilteredUserList] = useState(DummyUserList);
  const [view, setView] = useState(View.USER);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  return (
    <>
      <div className="relative top-0 left-0 w-full h-full min-h-screen box-border">
        <div className={`relative w-full h-full bg-[#F1F2F6] ${isSideBarOpen ? 'grid grid-flow-col grid-cols-[1fr_7fr] gap-[10px]' : 'flex gap-[10px]'} overflow-x-hidden`}>
          <SideBar view={view} setView={setView} isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
          <ListView
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
            dummyActiveUser={DummyActiveUser}
            numberOfNotifications={numberOfNotifications}
            dummyUsers={DummyUserList}
            dummyProducts={DummyProductList}
            setView={setView}
            view={view}
            filteredUsers={filteredUserList}
            setFilteredUsers={setFilteredUserList}
            filteredProducts={filteredProductList}
            setFilteredProducts={setFilteredProductList}
            isUserModalOpen={isUserModalOpen}
            setIsUserModalOpen={setIsUserModalOpen}
            isProductModalOpen={isProductModalOpen}
            setIsProductModalOpen={setIsProductModalOpen}
            searchUser={searchUser}
            searchProduct={searchProduct}
          />
        </div>
      </div>
    </>
  );
}
