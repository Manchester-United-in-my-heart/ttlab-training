import { SlNote } from 'react-icons/sl';
import { MdNavigateNext } from 'react-icons/md';
import { GrPrevious } from 'react-icons/gr';

import { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

export type Product = {
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
};

type ProductListProps = {
  products: Product[];
};

export default function ProductList(props: ProductListProps) {
  const products = props.products;
  const [numberOfProductPerPage, setNumberOfProductPerPage] = useState(10);

  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(products.length / numberOfProductPerPage);
  const productListByPage = [];
  for (let i = 0; i < pages; i++) {
    productListByPage.push(products.slice(i * numberOfProductPerPage, (i + 1) * numberOfProductPerPage));
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-[2fr_2fr_5fr_2fr_3fr_2fr]">
        <div className="text-[#8B909A]">TÊN SẢN PHẨM</div>
        <div className="text-[#8B909A]">GIÁ</div>
        <div className="text-[#8B909A]">SỐ LƯỢNG</div>
        <div className="text-[#8B909A]">MÔ TẢ</div>
        <div className="text-[#8B909A]">ẢNH</div>
        <div className="text-[#8B909A]">HÀNH ĐỘNG</div>
      </div>
      <hr />

      {productListByPage[currentPage].map((product) => (
        <div className="w-full" key={product.name}>
          <div className="grid grid-cols-[2fr_2fr_5fr_2fr_3fr_2fr] py-3">
            <div className="font-semibold">{product.name}</div>
            <div>{product.price}</div>
            <div>{product.quantity}</div>
            <div>{product.description}</div>
            <div>
              <img src={product.image} alt="" className="w-10 h-10" />
            </div>
            <div>
              <button className="px-2 py-1 text-xl text-[#8B909A] rounded-md shadow-none">
                <SlNote />
              </button>
              <button className="px-2 py-1 text-xl text-[#8B909A] rounded-md shadow-none">
                <BiTrash />
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}

      <div>
        <div className="flex justify-between">
          <div>
            Showing{' '}
            <select
              className="px-2 py-1 rounded-md shadow-none"
              onChange={(e) => {
                setNumberOfProductPerPage(parseInt(e.target.value));
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>{' '}
            of {products.length}
          </div>

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
    </div>
  );
}
