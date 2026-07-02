import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"

import NewNavBar from './NewNavBar'
import AboutCateringParent from './AboutCateringParent';
import MenuParent from './MenuParent';
import PhotoNav from './PhotoNav';
import Page404 from './Page404';
import CounterNew from './CounterNew';
import ReadMoreNew from './ReadMoreNew';
import FormaUsht2 from './FormaUsht2';
import FormaUsht7 from './FormaUsht7';
import AxiosUsht10 from './AxiosUsht10';


function App() {
  return (
    <div>
      <NewNavBar />
      <Routes>
        <Route path="/" element={<PhotoNav />} />
        <Route path="/menu" element={<MenuParent />} />
        <Route path="/about" element={<AboutCateringParent />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <AxiosUsht10/>
    </div>
  );
}

export default App