import React from 'react';
import './App.css';
import GA_Hero from './components/GA_Hero';
import Cards from './components/Cards';
import WhyWellcare from './components/WhyWellcare'
import BecomeProducer from './components/BecomeProducer';
import NewsEvents from './components/NewsEvents';

function App() {
  return (
    <div className="App">
      <div className="testCenter">
        <ul>
          <li><a href="#">Need a Plan</a></li>
          <li><a href="#">Members</a></li>
          <li><a href="#">Providers</a></li>
          <li><a href="#">Corporate</a></li>
        </ul>
      </div>
      
      {/* HERO SECTION */}
      <GA_Hero />

      {/* Cards below Hero */}
      <Cards />

      {/* 3rd section - Why Wellcare */}
      <WhyWellcare />

      {/* 4th section - Become Producer */}
      <BecomeProducer />

      {/* 5th section - News & Events */}
      <div className="news">
      <h1>News & Events</h1>
      <NewsEvents />
      </div>

    </div>
  );
}

export default App;
