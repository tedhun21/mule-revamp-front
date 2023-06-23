import * as React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/Home';
import Header from './components/Header';
import Notice from "./pages/Notice";
import "./App.css"

// 1. import `ChakraProvider` component

function App() {
  // 2. Wrap ChakraProvider at the root of your app

  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </Router>
  )
}

export default App;