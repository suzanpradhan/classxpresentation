import { MagnifyingGlass } from 'phosphor-react';

export default function SearchField() {
  return (
    <div className="flex h-10 items-center rounded-md border border-gray-500 px-2 text-xs">
      <MagnifyingGlass size={20} />
      <input
        type="search"
        className="placeholder:gray-600 h-full bg-transparent indent-2 font-satoshi text-sm font-normal outline-none"
        placeholder="Search..."
      />
    </div>
  );
}
