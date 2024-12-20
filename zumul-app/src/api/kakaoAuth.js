// src/api/kakaoAuth.js

const APP_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
console.log("APP_KEY",APP_KEY);

// Kakao SDK 초기화 함수
export const initializeKakao = () => {
  if (!window.Kakao) {
    console.error("Kakao SDK is not loaded. Check your script in index.html.");
    return;
  }

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(APP_KEY); // JavaScript 키로 SDK 초기화
    console.log("Kakao SDK initialized:", window.Kakao.isInitialized());
  }
};

// 로그인 함수
export const handleKakaoLogin = (redirectUri) => {
  if (!window.Kakao) {
    console.error("Kakao SDK is not loaded.");
    return;
  }

  if (!window.Kakao.isInitialized()) {
    console.error("Kakao SDK is not initialized. Call initializeKakao first.");
    return;
  }

  window.Kakao.Auth.authorize({
    redirectUri: redirectUri || "http://localhost:3000/auth/kakao/callback", // 기본 리다이렉트 URI
  });
};

// 쿠키에서 토큰 가져오는 함수
export const getAccessTokenFromCookie = () => {
  const parts = document.cookie.split("authorize-access-token=");
  if (parts.length === 2) {
    return parts[1].split(";")[0];
  }
  return null;
};

// 토큰 상태 확인 함수
export const checkLoginStatus = async () => {
  if (!window.Kakao.Auth) {
    console.error("Kakao.Auth is not available.");
    return null;
  }

  try {
    const status = await window.Kakao.Auth.getStatusInfo();
    if (status.status === "connected") {
      return window.Kakao.Auth.getAccessToken();
    }
    return null;
  } catch (error) {
    console.error("Failed to check login status:", error);
    return null;
  }
};
