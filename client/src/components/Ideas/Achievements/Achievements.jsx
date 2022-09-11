import React from "react";
import styles from "./Achievements.module.scss";

const Achievements = ({ achievements }) => {
  
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Achievements</h2>
      <div className={styles.achievementsWrapper}>
        {achievements.length === 0 ? (
          <div>No achievements yet</div>
        ) : (
          achievements.map((achievement, index) => (
            <div className={styles.achievementContainer} key={index}>
              <div className={styles.achievementCounter}>
                {achievement.count}
              </div>
              <p className={styles.achievementCategory}>{achievement.type}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Achievements;
