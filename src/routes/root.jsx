import {useEffect, useState} from 'react';
import {SideBar} from '../fragments/side-bar';
import {searchProduct, searchUser} from '../helper/utils.ts';
import ListView from '../fragments/list-view.tsx';
import {DummyActiveUser, numberOfNotifications} from '../data/data.ts';

export default function Root() {
  
  const host = import.meta.env.VITE_HOST || 'https://nest-mongo-gold.vercel.app'; 
  // send token named 'token' to server for authentication. If return 401, redirect to login page.
  
  const token = localStorage.getItem('accessToken');
  if (!token) {
    window.location.href = '/login';
  }
  const View = {
    USER: 'USER', PRODUCT: 'PRODUCT',
  };
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [filteredUserList, setFilteredUserList] = useState([]);
  const [view, setView] = useState(View.USER);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [dummyUserList, setDummyUserList] = useState([]);
  const [dummyProductList, setDummyProductList] = useState([]);
  
  // Fetch Data from server
  useEffect(() => {
    fetch(`${host}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.status)
      if (res.status === 401) {
        window.location.href = '/login';
      }
      return res.json();
    }).then((data) => {
      const userList = []
      data.forEach((user) => {
        userList.push(
          {
            avatar : user.avatarUrl,
            name : user.name,
            email : user.email,
            DOB: user.dateOfBirth,
            phone: user.phone
          }
        )
        setDummyUserList(userList)
        setFilteredUserList(userList)
      });
    }).catch((err) => {
      console.log(err);
    });

    fetch(`${host}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.status)
      if (res.status === 401) {
        window.location.href = '/login';
      }
      return res.json();
    }).then((data) => {
      const productList = []
      data.forEach((product) => {
        productList.push(
          {
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
            image: product.imageUrl,
          }
        )
        setDummyProductList(productList)
        setFilteredProductList(productList)
      });
    }).catch((err) => {
      console.log(err);
    });  
  }, []);
 
  const handleAddUser = async (user) => {
    const newUserList = [...dummyUserList, user];
    setDummyUserList(newUserList);
    setFilteredUserList(newUserList);

    // send data to server
    await fetch(`${host}/users`, {
      body: JSON.stringify(
        {
          name: user.name,
          email: user.email,
          dateOfBirth: user.DOB,
          phone: user.phone,
          avatarUrl: user.avatar,
        }
      ),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
      }
    })
  }
  
  const handleAddProduct = async (product) => {
    const newProductList = [...dummyProductList, product];
    setDummyProductList(newProductList);
    setFilteredProductList(newProductList);

    // send data to server
    await fetch(`${host}/products`, {
      body: JSON.stringify(
        {
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          description: product.description,
          imageUrl: product.image,
        }
      ),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
      }
    })
  }
 
  return (<>
    <div className="relative top-0 left-0 w-full h-full min-h-screen box-border">
      <div
        className={`relative w-full h-full bg-[#F1F2F6] ${isSideBarOpen ? 'grid grid-flow-col grid-cols-[1fr_7fr] gap-[10px]' : 'flex gap-[10px]'} overflow-x-hidden`}>
        <SideBar view={view} setView={setView} isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}/>
        <ListView
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          dummyActiveUser={DummyActiveUser}
          numberOfNotifications={numberOfNotifications}
          dummyUsers={dummyUserList}
          dummyProducts={dummyProductList}
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
          
          handleAddUser={handleAddUser}
          handleAddProduct={handleAddProduct}
        />
      </div>
    </div>
  </>);
}
