import './App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Body from './Body';
import Footer from './Footer';



function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} />
      <Body page={page} setPage={setPage} />
      <Footer />
    </div>
  );
}

export default App;
