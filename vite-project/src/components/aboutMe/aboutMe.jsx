import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './aboutMe.module.css';

export const AboutMe = () => {
  return (
    <section className={styles.container} id = 'about'>
        <h2 className={styles.title}>
          About
        </h2>
        <div className={styles.content}>





            {/* <img src = {getImageUrl("about/aboutMe.jpg")} alt = "sitting on my laptop!" className = {styles.brightImage} /> */}
        {/* <ul className = {styles.aboutItems}>
          <li className = {styles.aboutItem}>
            <img src = {getImageUrl('about/cursorIcon.png')} alt="Cursor Icon"/>
            <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I am a frontend developer with experience in building responsive and optimized sites.</p>
            </div>
          </li>
          <li className = {styles.aboutItem}>
            <img src = {getImageUrl('about/serverIcon.png')} alt="Server Icon"/>
            <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>I have experience developing fast and optimized back-end systems and APIs.</p>
            </div>
          </li>
          <li className = {styles.aboutItem}>
            <img src = {getImageUrl('about/uiIcon.png')} alt="UI Icon"/>
            <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>I have designed multiple landing pages and have created design systems as well.</p>
            </div>
          </li>
        </ul> */}
      </div>
    </section>
  );
};