import * as React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/Home';
import Header from './components/Header';
import Notice from "./pages/Notice";
import Market from "./pages/Market";
import News from "./pages/News"
import "./App.css"
import { styled } from 'styled-components';

const Features = styled.div`
    min-width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: last baseline;
    justify-content: flex-end;
    background: linear-gradient(157deg, #C13EAD 0%, #3670C2 100%), #FFF;
  `
function App() {
  return (
      <Features>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element ={<Home />}/>
            <Route path="/notice" element={<Notice />} />
            <Route path="/market" element={<Market />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Router>
      </Features>
  )
}

export default App;