import React, { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Chặn F12
    document.addEventListener('keydown', function (e) {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert('Chức năng này đã bị vô hiệu hóa!');
      }
    });

    // Chặn chuột phải
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      alert('Chức năng này đã bị vô hiệu hóa!');
    });
  }, []);

  return <Component {...pageProps} />;
}