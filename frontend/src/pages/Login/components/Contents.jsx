import React, { useEffect, useState } from 'react';
import { BasicButton } from '../../../styles/Button';
import dotenv from 'dotenv';
import './style/conteents.scss';

function Contents(props) {
  // dotenv.config();
  // const kakaoClientId = 'a85abf667f8f376bb8a26dafcb787c67';
  // console.log(process.env.REACT_APP_KAKAO_JS_KEY);
  // const kakaoOnSuccess = async (data) => {
  //   console.log(data);
  //   const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
  // };
  // const kakaoOnFailure = (error) => {
  //   console.log(error);
  // };
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
        <BasicButton
          id="kakao-login-btn"
          // token={kakaoClientId}
          // onSuccess={kakaoOnSuccess}
          // onFail={kakaoOnFailure}
        >
          카카오톡 로그인
        </BasicButton>
      </div>
    </>
  );
}

export default Contents;
