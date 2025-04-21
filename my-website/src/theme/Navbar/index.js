import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import SearchBar from '@site/src/components/SearchBar';

export default function Navbar(props) {
  console.log('Custom Navbar loaded');
  return (
    <>
      <OriginalNavbar {...props} />
      <div style={{ position: 'absolute', right: '60px', top: '10px', zIndex: 1000 }}>
        <SearchBar />
      </div>
    </>
  );
  console.log('Custom Navbaưr loaded');
}