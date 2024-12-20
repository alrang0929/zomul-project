import React from 'react';
import "./style/main_visual_slider.scss";
import MainVisual from './plugin/SwiperMainVisual';
function MainVisualSlider(props) {
  return (
    <>
      <section className="main-visual-slider">
        <MainVisual />
      </section>
    </>
  );
}

export default MainVisualSlider;
