import React from "react";
import IdeaCard from "../IdeaCard/IdeaCard";
import setDataToLocalStorage from "../../../utils/writeLocalStorage";
import styles from "./FreshIdeas.module.scss";

const FreshIdeas = ({ ideas, myIdeas, setMyIdeas }) => {

  const addTaskToList = (taskKey) => {
    ideas.map((idea, i) => {
      if (taskKey === idea.key) {
        const newIdea = {
          ...idea,
          isDone: false,
          isCurrent: myIdeas.length === 0 ? true : false,
        };
        setMyIdeas((prevState) => [...prevState, newIdea]);
        setDataToLocalStorage("myIdeas", newIdea);

        ideas.splice(i, 1);
      }
      return ideas;
    });
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Choose fresh ideas to do</h2>
      <div className={styles.cardContainer}>
        {ideas.map((idea) => (
          <div key={idea.key} onClick={() => addTaskToList(idea.key)}>
            <IdeaCard task={idea.activity} type={idea.type} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreshIdeas;
