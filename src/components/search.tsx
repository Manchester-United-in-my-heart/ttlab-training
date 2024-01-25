import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

type SearchBoxProps = {
  onSearch: (searchTerm: string) => void;
};

export default function SearchBox(props: SearchBoxProps) {
  const onSearch = props.onSearch;
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative">
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
        <span className="absolute right-0 mr-2">
          <CiSearch />
        </span>
      </div>
    </div>
  );
}
