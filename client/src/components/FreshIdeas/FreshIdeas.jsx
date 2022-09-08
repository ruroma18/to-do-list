import React from "react";
import IdeaCard from "../IdeaCard/IdeaCard";
import styles from "./FreshIdeas.module.scss";

const FreshIdeas = ({ ideas, addTaskToList }) => {

  const addTask = (key) => addTaskToList(key);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Choose fresh ideas to do</h2>
      <div className={styles.cardContainer}>
        {ideas.map((idea) => (
          <div key={idea.key} onClick={() => addTask(idea.key)}>
            <IdeaCard task={idea.activity} type={idea.type} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreshIdeas;
