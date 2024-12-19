import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa"; // React Icons 사용

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-100 px-6 py-4 shadow-md">
      {/* 1. 로고 */}
      <h1 className="text-2xl font-bold text-blue-600">
        ZumulMarket
      </h1>

      {/* 2. 검색바 */}
      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="제목, 작품명, 태그 검색"
          className="w-full px-4 py-2 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 3. 아이콘 버튼 */}
      <div className="flex items-center space-x-4">
        {/* Favorite Icon */}
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaHeart className="text-purple-600" size={20} />
        </button>
        {/* Cart Icon */}
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaShoppingCart className="text-purple-600" size={20} />
        </button>
      </div>

      {/* 4. 회원 메뉴 */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          회원가입
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
