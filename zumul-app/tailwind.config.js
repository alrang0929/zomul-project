/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/styles/*.css", 
  ],
  theme: {
    extend: {
      // 1. 폰트 설정
      fontFamily: {
        sans: ['"Pretendard Variable"', 'sans-serif'],
      },
      
      // 2. 색상 설정
      colors: {
        primary: {
          light: "#A8C5FF",  // 연한 파란색
          DEFAULT: "#2563EB", // 기본 파란색
          dark: "#1E3A8A",    // 짙은 파란색
        },
        secondary: {
          DEFAULT: "#FACC15", // 노란색 (버튼, 강조)
        },
        neutral: {
          light: "#F9FAFB",   // 배경색
          DEFAULT: "#F3F4F6", // 기본 중립색 (카드 배경)
          dark: "#1F2937",    // 텍스트
        },
        danger: {
          DEFAULT: "#EF4444", // 빨간색 (경고)
        },
      },

      // 3. 폰트 크기 설정
      fontSize: {
        sm: "0.875rem",  // 14px → 0.875rem
        base: "1rem",    // 16px → 1rem
        lg: "1.125rem",  // 18px → 1.125rem
        xl: "1.25rem",   // 20px → 1.25rem
        "2xl": "1.5rem", // 24px → 1.5rem
        "3xl": "1.75rem",// 28px → 1.75rem
      },

      // 4. 간격 설정 (Padding, Margin)
      spacing: {
        xs: "0.25rem",   // 4px → 0.25rem
        sm: "0.5rem",    // 8px → 0.5rem
        base: "1rem",    // 16px → 1rem
        lg: "1.5rem",    // 24px → 1.5rem
        xl: "2rem",      // 32px → 2rem
      },

      // 5. 테두리 반경
      borderRadius: {
        sm: "0.25rem",   // 4px → 0.25rem
        base: "0.5rem",  // 8px → 0.5rem
        lg: "1rem",      // 16px → 1rem
        full: "9999px",  // 완전한 원형
      },

      // 6. 그림자 설정
      boxShadow: {
        sm: "0 0.0625rem 0.125rem rgba(0, 0, 0, 0.05)", // 1px → 0.0625rem
        base: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)",   // 2px → 0.125rem
        lg: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)",      // 4px → 0.25rem
      },

      // 7. 최대 너비 설정
      maxWidth: {
        screen: "80rem", // 1280px → 80rem
      },
    },
  },
  plugins: [],
};
