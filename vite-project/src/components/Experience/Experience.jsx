import React from 'react';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';
import styles from './Experience.module.css';

export const Experience = () => {
  const getCompanyLink = (company) => {
    const companyLinks = {
      "FabLab, Morgridge Institute of Research": "",
      "IDBI Asset Management Ltd.": "",
      "University of Wisconsin Madison, Department of Computer Sciences": "",
      "University of Wisconsin Madison, Statistics Learning Center": "",
      "University of Wisconsin Madison, Wisconsin School of Business": "",
      "University of Wisconsin Madison, Mathematics Learning Center": "",
    };
    return companyLinks[company] || "";
  }
  return (
    <section  className= {styles.container} id = "experience">
      <h2 className= {styles.heading}>Skills</h2>
        <div className={styles.mySkills}>
            {skills.map((skill, id) => {
              return <div key = {id}>
                <div><img src = {getImageUrl(skill.imageSrc)} alt = {skill.title} /></div>
                <p className='skills'>{skill.title}</p>
              </div>
            })}</div>
        <div className={styles.historyContainer}>
        <h2 className = {styles.heading}>Work Experience</h2>
        <ul className= {styles.myPastJobs}>
            {
              history.map((historyItem, id) => {
                return <li key={id} className= {styles.historyItem}>
                  <a href = {getCompanyLink(historyItem.company)}
                  target = "_blank"
                  rel = "noopener noreferrer"
                  className = {styles.cardItem}
                  >

                  </a>
                  <img src = {getImageUrl(historyItem.logo)} alt = {historyItem.role} className={styles.historyImage}/>
                  <div className = {styles.jobDetails}>
                    <h3 className = {styles.role}>{historyItem.role}</h3>
                    <p className = {styles.company}>@ {historyItem.company}</p>
                    <p className = {styles.timeLine}>{historyItem.startDate} - {historyItem.endDate || "Present"}</p>
                    <p className = {styles.location}>{historyItem.location}</p>
                    <ul className={styles.description}>
                  {historyItem.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                  </div>
                </li>
              }
              )
            }
        </ul> 
        </div>
    </section>
  )
}
