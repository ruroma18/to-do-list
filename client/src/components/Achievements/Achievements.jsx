import React from 'react';
import styles from './Achievements.module.scss';

const Achievements = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Achievements</h2>
      <div className={styles.achievementsWrapper}>
        <div className={styles.achievementContainer}>
          <div className={styles.achievementCounter}>1</div>
          <p className={styles.achievementCategory}>Education</p>
        </div>
        <div className={styles.achievementContainer}>
          <div className={styles.achievementCounter}>1</div>
          <p className={styles.achievementCategory}>Education</p>
        </div>
        <div className={styles.achievementContainer}>
          <div className={styles.achievementCounter}>1</div>
          <p className={styles.achievementCategory}>Education</p>
        </div>
        <div className={styles.achievementContainer}>
          <div className={styles.achievementCounter}>1</div>
          <p className={styles.achievementCategory}>Education</p>
        </div>
        <div className={styles.achievementContainer}>
          <div className={styles.achievementCounter}>1</div>
          <p className={styles.achievementCategory}>Education</p>
        </div>
        

      </div>
      
    </section>
  );
}

export default Achievements;
