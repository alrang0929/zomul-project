import React from 'react';
import MainVisualSlider from './components/MainVisualSlider';
import CategoriesList from './components/CategoriesList';

const Home = () => {
  return (
    <>
      {/* 1. 메인 슬라이드 (swiper) */}
      <MainVisualSlider />
      {/* 2. 카테고리 리스트 */}
      <CategoriesList/>
      {/* 3. 오늘의 인기 작품 */}
      {/* 4. 리퀘스트(게시판) */}
    </>
  );
};

export default Home;
