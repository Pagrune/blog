import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/style.css";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from './pages/NotFound';
import Missions from './components/Missions';
import Valeurs from './components/Valeurs';
import Chiffres from './components/Chiffres';
import NewsDetail from './pages/NewsDetail';
import Post from './pages/Post';
import NewsCard from './components/NewsCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} >
          <Route path="nos-missions" element={<Missions/>}/>
          <Route path="nos-valeurs" element={<Valeurs/>}/>
          <Route path="nos-chiffres" element={<Chiffres/>}/>
        </Route>
        <Route path="/news" element={<News/>} />
        <Route path="/news/:slug" element={<NewsDetail/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route exact path="/" element={<NewsCard/>} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
