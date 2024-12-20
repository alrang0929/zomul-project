import React, { useEffect, useState } from 'react';
import { BasicButton } from '../../../styles/Button';
import './style/conteents.scss';

function Contents(props) {
  const APP_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
  console.log('APP_KEY', APP_KEY);
  return (
    <>
      <div className="text-wrap">
        <div className="text">
          <span>
            당신의 작품을 지금 <b>쪼물마켓</b>에서
          </span>
          <span>
            <b>세상</b>과 <b>연결하세요</b>
          </span>
        </div>
        <BasicButton id="kakao-login-btn">카카오톡 로그인</BasicButton>
      </div>
    </>
  );
}

export default Contents;
