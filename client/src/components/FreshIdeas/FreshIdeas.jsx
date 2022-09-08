import React from "react";
import IdeaCard from "../IdeaCard/IdeaCard";
import styles from "./FreshIdeas.module.scss";


const FreshIdeas = ({ideas}) => {
  console.log(ideas)

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Choose fresh ideas to do</h2>
      <div className={styles.cardContainer}>
        {ideas.map((idea) => <IdeaCard key={idea.key} task={idea.activity} type={idea.type} />)}
      </div>

    </section>
  );
};

export default FreshIdeas;
