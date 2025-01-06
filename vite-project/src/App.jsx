import React from 'react';
import styles from './App.module.css';
import { MyNavbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { AboutMe } from './components/aboutMe/aboutMe';
import { Experience } from './components/Experience/Experience';
import { AIBot } from './components/ai_bot/ai_bot';

function App() {
  return (
    <div className={styles.App}>
      <MyNavbar />
      <Hero />
      <Experience />
      <AIBot />
    </div>
  );
}

export default App;