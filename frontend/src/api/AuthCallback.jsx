import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 토큰 정보 추출
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("access_token");

    if (token) {
      document.cookie = `authorize-access-token=${token}; path=/;`;
      console.log("Token saved:", token);

      // 이후 메인 페이지로 리다이렉트
      navigate("/");
    } else {
      console.error("Failed to get access token");
    }
  }, [navigate]);

  return <div>Logging you in...</div>;
}

export default AuthCallback;
