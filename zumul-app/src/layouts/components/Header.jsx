import React, { useTransition } from 'react';
import {
  IoIosSearch,
  IoIosHeart,
  IoIosHeartEmpty,
  IoIosCart,
} from 'react-icons/io';
import { BasicButton, IconButton } from '../../styles/Button';


function Header(props) {
  
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space around',
        gap: '40px',
        // margin: '0 10vw',
        padding: '20px 10vw',
        backgroundColor: '#fff',
        width: '100%',
      }}
    >
      {/* 1. 로고 h1 */}
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="logo-box">
          <h1 className="logo">
            <img
              src="/images/logo_ZomulMarket.png"
              alt="조물마켓 로고"
              style={{ width: '100%' }}
            />
          </h1>
        </div>
      </a>
      {/* 2. 검색바 */}
      <div
        className="serch-bar"
        style={{
          backgroundColor: '#F2F2F2',
          padding: '10px 20px',
          width: '70%',
          borderRadius: '25px',
          display:"flex",
        }}
      >
        <IoIosSearch style={{ marginRight: '10px' }} />
        <input
          type="text"
          defaultValue={'제목, 작품명, 태그 검색'}
          style={{ border: 'transparent', backgroundColor: 'transparent' }}
        />
      </div>
      {/* 3. icon 버튼(faivorit, cart) */}
      <div
        className="icon-button-wrap"
        style={{ display: 'flex', gap: '10px' }}
      >
        <IconButton>
          <IoIosSearch />
        </IconButton>
        <IconButton>
          <IoIosCart />
        </IconButton>
      </div>
      {/* 4. user 메뉴 로그인 전: 회원가입, 로그인 || 로그인(일반): 마이페이지, 로그아웃 || 로그인(판매자): 판매관리 추가*/}
      <div className="button-wrap" style={{ display: 'flex', gap: '10px' }}>
        <BasicButton style={{width:"100px"}}>회원가입</BasicButton>
        <BasicButton style={{width:"100px"}}>로그인</BasicButton>
      </div>
    </header>
  );
}

export default Header;
