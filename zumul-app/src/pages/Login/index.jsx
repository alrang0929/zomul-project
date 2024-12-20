import React from 'react';
import { BasicButton } from '../../styles/Button';
import Contents from './components/contents';

const Login = () => {
  return (
    <>
      <main
        className="login-page"
        style={{ height: '100vh', position: 'relative' }}
      >
      <Contents/>
        <div
          className=""
          style={{
            backgroundColor: '#00000050',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: -999,
          }}
        ></div>
        <div
          className="bg-box"
          style={{
            height: '100vh',
            backgroundImage: 'url("/images/img01.jpg")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -9999,
          }}
        ></div>
      </main>
    </>
  );
};

export default Login;
