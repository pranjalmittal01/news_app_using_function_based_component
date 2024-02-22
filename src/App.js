import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 5
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0) 

  // const setProgress = (progress) => {
  //   setProgress(progress);
  // }
  return (
    <div>
    <Router>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" category="general" country="in" pageSize={pageSize} />}> </Route>
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" category="general" country="in" pageSize={pageSize} />}> </Route>
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" category="business" country="in" pageSize={pageSize} />}> </Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" country="in" pageSize={pageSize} />}> </Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" category="sports" country="in" pageSize={pageSize} />}> </Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" country="in" pageSize={pageSize} />}> </Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" category="health" country="in" pageSize={pageSize} />}> </Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" category="science" country="in" pageSize={pageSize} />}> </Route>
      </Routes>
    </Router>
  </div>
  )
}

export default App
