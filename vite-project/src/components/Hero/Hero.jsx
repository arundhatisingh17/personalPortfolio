import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi! I'm Arundhati.
        </h1>
        <p className={styles.description}>
          I am a full stack developer and a machine learning enthusiast. I am currently pursuing my Bachelors of Sciences in Computer Science, Data Science and Math at the University of Wisconsin Madison!
        </p>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/arundhati-singh171003/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/arundhatisingh17" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/_.arundhati._/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <a href="mailto:asingh278@wisc.edu" className={styles.contactBtn}>Contact Me</a>
      </div>
        <img 
        className = {styles.heroImg}
        src = {getImageUrl("hero/heroImage.png")}
        alt = "Hero Image"
        />
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
