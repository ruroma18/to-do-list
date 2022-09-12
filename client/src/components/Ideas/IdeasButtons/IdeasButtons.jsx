import React from "react";
import { getIdeas, createIdeas } from "../../../api";
import styles from "./IdeasButtons.module.scss";

const IdeasButtons = ({
  myIdeas,
  setMyIdeas,
  doneIdeas,
  setDoneIdeas,
  achievements,
  setAchievements,
}) => {
  const getData = () => {
    getIdeas().then((data) => [
      setMyIdeas(data.myIdeas),
      setDoneIdeas(data.doneIdeas),
      setAchievements(data.achievements),
    ]);
  };

  const sendData = () => {
    createIdeas(myIdeas, doneIdeas, achievements);
  };

  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={() => sendData()}>
        Save ideas
      </button>
      <button className={styles.btn} onClick={() => getData()}>
        Get ideas
      </button>
    </div>
  );
};

export default IdeasButtons;
