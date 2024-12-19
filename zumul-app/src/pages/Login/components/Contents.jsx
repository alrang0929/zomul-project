import React, { useEffect, useState } from 'react';
import { BasicButton } from '../../../styles/Button';
import {
    initializeKakao,
    handleKakaoLogin,
    checkLoginStatus,
  } from "../../../api/kakaoAuth";
  
function Contents(props) {
    const [token, setToken] = useState(null);

    // Kakao SDK 초기화
    useEffect(() => {
      initializeKakao();
  
      // 로그인 상태 확인
      checkLoginStatus().then((accessToken) => {
        if (accessToken) {
          console.log("Already logged in with token:", accessToken);
          setToken(accessToken);
        }
      });
    }, []);
  

    
     
  return (
    <>
      <div
        className="text-wrap"
        style={{
          width: '500px',
          textAlign: 'center',
          lineHeight: '1.5',
          display: 'flex',
          gap: '40px 0',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
      >
        <div
          className="text"
          style={{ color: '#fff', textAlign: 'center', fontSize: '2rem' }}
        >
          <span style={{ display: 'block' }}>
            당신의 작품을 지금 <b>쪼물마켓</b>에서
          </span>
          <span style={{ display: 'block' }}>
            <b>세상</b>과 <b>연결하세요</b>
          </span>
        </div>
        <BasicButton
        id="kakao-login-btn"
        onClick={handleKakaoLogin}
          bgcolor={'#FFED67'}
          style={{
            width: '400px',
            padding: '20px 0',
            borderRadius: '999px',
            color: '#131313',
            fontWeight: '600',
          }}
        >
          카카오톡 로그인
        </BasicButton>
        <p id="token-result">
        {token
          ? `Login success, token: ${token}`
          : "Not logged in. Click the button to login."}
      </p>
      </div>
    </>
  );
}

export default Contents;
