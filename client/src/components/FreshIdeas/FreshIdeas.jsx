import React from "react";
import IdeaCard from "../IdeaCard/IdeaCard";
import styles from "./FreshIdeas.module.scss";

const FreshIdeas = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Choose fresh ideas to do</h2>
      <div className={styles.cardContainer}>
        <IdeaCard />
        <IdeaCard />
        <IdeaCard />
        <IdeaCard />
      </div>

    </section>
  );
};

export default FreshIdeas;
