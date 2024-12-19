/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // HTML 파일
    './src/**/*.{js,jsx,ts,tsx}', // React 컴포넌트
  ],
  theme: {
    extend: {}, // 커스텀 스타일 추가 가능
  },
  plugins: [],
};
