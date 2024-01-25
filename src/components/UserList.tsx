import { SlNote } from 'react-icons/sl';
import { MdNavigateNext } from 'react-icons/md';
import { GrPrevious } from 'react-icons/gr';
import { BiTrash } from 'react-icons/bi';

import { useState } from 'react';
export class Phone {
  number: string;
  constructor(number: string) {
    this.number = number;
  }
  toString() {
    return this.number[0] + this.number[1] + this.number[2] + '-' + this.number[3] + this.number[4] + this.number[5] + '-' + this.number[6] + this.number[7] + this.number[8] + this.number[9];
  }
}
export type User = {
  avatar: string;
  name: string;
  email: string;
  DOB: Date;
  phone: Phone;
};
export type UserListProps = {
  users: User[];
};
export default function UserList(props: UserListProps) {
  const users = props.users;
  const [numberOfUserPerPage, setNumberOfUserPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(users.length / numberOfUserPerPage);

  const userListByPage = [];

  for (let i = 0; i < pages; i++) {
    userListByPage.push(users.slice(i * numberOfUserPerPage, (i + 1) * numberOfUserPerPage));
  }

  // split users into pages

  return (
    <div className="w-full">
      <div className="grid grid-cols-[1fr_3fr_5fr_2fr_3fr_2fr]">
        <div className="text-[#8B909A]">AVATAR</div>
        <div className="text-[#8B909A]">TÊN NGƯỜI DÙNG</div>
        <div className="text-[#8B909A]">EMAIL</div>
        <div className="text-[#8B909A]">NGÀY SINH</div>
        <div className="text-[#8B909A]">SỐ ĐIỆN THOẠI</div>
        <div className="text-[#8B909A]">HOẠT ĐỘNG</div>
      </div>
      <hr />
      {userListByPage &&
        userListByPage.length > 0 &&
        userListByPage[currentPage].map((user) => (
          <div className="w-full" key={user.email}>
            <div className="grid grid-cols-[1fr_3fr_5fr_2fr_3fr_2fr] py-3">
              <div>
                <img src={user.avatar} alt="" className="w-10 h-10" />
              </div>
              <div className="font-semibold">{user.name}</div>
              <div>{user.email}</div>
              <div>{user.DOB.toLocaleDateString()}</div>
              <div>{user.phone.toString()}</div>
              <div>
                <button className="px-2 py-1 text-xl bg-transparent text-[#8B909A] shadow-none">
                  <SlNote />
                </button>
                <button className="px-2 py-1 text-xl bg-transparent text-[#8B909A] shadow-none">
                  <BiTrash />
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      <div className="flex justify-between">
        {/* Set number of user per page: */}
        <div>
          Showing{' '}
          <select
            name="numberOfUserPerPage"
            id="numberOfUserPerPage"
            className="px-2 py-1 bg-transparent text-[#8B909A] border rounded-xl"
            value={numberOfUserPerPage}
            onChange={(e) => {
              setNumberOfUserPerPage(Number(e.target.value));
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>{' '}
          of {users.length}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-[3px]">
          <button
            className="px-2 py-1 bg-[#F1F2F6] text-[#8B909A] shadow-none"
            onClick={() => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            <GrPrevious />
          </button>
          {Array.from(Array(pages).keys()).map((page) => (
            <button
              className={`px-2 py-1 shadow-none ${currentPage === page ? 'font-bold bg-blue-600 text-white' : 'bg-[#F1F2F6] text-[#8B909A] '}`}
              key={page}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page + 1}
            </button>
          ))}
          <button
            className="px-2 py-1 bg-[#F1F2F6] text-[#8B909A] shadow-none"
            onClick={() => {
              if (currentPage < pages - 1) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
}
