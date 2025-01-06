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
        I am Arundhati Singh, a dedicated and versatile Computer Science and Data Science student at the University of Wisconsin-Madison, with a strong foundation in <strong>programming</strong>, <strong>machine learning</strong>, and <strong>problem-solving</strong>. My academic journey has been enriched by hands-on experiences in research, mentorship, and professional roles, all of which have honed my technical expertise and collaborative skills.

With a passion for innovation and a drive to tackle complex challenges, I’ve worked on diverse projects ranging from optimizing financial models as an Equity and Debt Research Analyst Intern to advancing safety and operational protocols in cutting-edge 3D metal printing technology as a <strong>Research Assistant</strong> at the <strong>Morgridge Institute of Research</strong>. My roles have not only sharpened my technical acumen in programming and systems integration but have also emphasized the importance of communication, collaboration, and user-centered design.

As a <strong>Teaching Assistant</strong>, I’ve supported hundreds of students across computer science, statistics, and mathematics, reinforcing my ability to break down complex concepts and foster a deeper understanding of technical subjects. My leadership and adaptability are further exemplified by my role as a Student Learning Technology Assistant, where I ensured seamless delivery of MBA lectures and enhanced application processes for the Wisconsin School of Business by <strong>building</strong> a robust application portal for the MBA program.

Technologically, I am proficient in a wide range of programming languages, frameworks, and developer tools, including Python, Java, React, Flask, TensorFlow, and PyTorch, and am skilled in implementing robust solutions for real-world problems. Beyond technical skills, I am a proactive learner, constantly exploring <strong>innovative ideas</strong> and striving to make meaningful contributions to every team or project I join. 
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
