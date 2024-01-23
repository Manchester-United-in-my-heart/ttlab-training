import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

type SearchBoxProps = {
  onSearch: (searchTerm: string) => void;
};

export default function SearchBox(props: SearchBoxProps) {
  const onSearch = props.onSearch;
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className="flex justify-center items-center">
        <input      
          type="search"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onSearch(e.target.value);
          }}
        />
        <span className="text-2xl">
          <CiSearch />
        </span>
      </div>
    </div>
  );
}
