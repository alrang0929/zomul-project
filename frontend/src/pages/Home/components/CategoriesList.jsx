import React from 'react';
import './style/categories_list.scss';
import { BsAward, BsCalendarDate } from 'react-icons/bs';
import { IoHandLeftOutline } from 'react-icons/io5';
import {
  HiChatBubbleOvalLeftEllipsis,
  HiOutlinePaintBrush,
} from 'react-icons/hi2';

function CategoriesList() {
  return (
    <>
      <section className="categories-list">
        <div className="button-wrap">
          <button>
            <div className="cont-wrap">
              <BsAward className="icon" />
              <span>이달의 작가</span>
            </div>
          </button>
          <button>
            <div className="cont-wrap">
              <BsCalendarDate className="icon" />
              <span>연말결산</span>
            </div>
          </button>
          <button>
            <div className="cont-wrap">
              <HiOutlinePaintBrush className="icon" />
              <span>예술 기획전</span>
            </div>
          </button>
          <button>
            <div className="cont-wrap">
              <IoHandLeftOutline className="icon" />
              <span>핸드메이드</span>
            </div>
          </button>
          <button>
            <div className="cont-wrap">
              <HiChatBubbleOvalLeftEllipsis className="icon" />
              <span>리퀘스트</span>
            </div>
          </button>
        </div>
      </section>
    </>
  );
}

export default CategoriesList;
