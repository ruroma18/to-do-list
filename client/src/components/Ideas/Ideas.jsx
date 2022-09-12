import React from 'react';
import { useEffect, useState } from "react";
import { getTask } from "../../api";
import getDataFromLocalStorage from "../../utils/getLocalStorage";
import Achievements from "./Achievements/Achievements";
import CompletedChallenges from "./CompletedChallenges/CompletedChallenges";
import FreshIdeas from "./FreshIdeas/FreshIdeas";
import IdeasList from "./IdeasList/IdeasList";
import styles from "./Ideas.module.scss";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [myIdeas, setMyIdeas] = useState([
    ...getDataFromLocalStorage("myIdeas"),
  ]);
  const [doneIdeas, setDoneIdeas] = useState([
    ...getDataFromLocalStorage("doneIdeas"),
  ]);
  const [achievements, setAchievements] = useState([
    ...getDataFromLocalStorage("achievements"),
  ]);

  const checkIsExist = ({key, activity, type}) => {
    const existIdea = ideas.find((idea) => idea.key === key);
    const existMyIdea = myIdeas.find((idea) => idea.key === key);
    const existDoneIdea = doneIdeas.find((idea) => idea.key === key);
    if (!existIdea && !existMyIdea && !existDoneIdea) {
      return {key, activity, type};
    }
  };

  useEffect(() => {
    if (ideas.length < 4) {
      getTask().then((data) => setIdeas([...ideas, checkIsExist(data)]));
    }
  }, [ideas.length]);
  

  return (
    <div className={styles.container}>
      <FreshIdeas ideas={ideas} myIdeas={myIdeas} setMyIdeas={setMyIdeas} />
      <IdeasList
        myIdeas={myIdeas}
        setMyIdeas={setMyIdeas}
        achievements={achievements} 
        setAchievements={setAchievements}
        setDoneIdeas={setDoneIdeas}
      />
      <Achievements achievements={achievements} />
      <CompletedChallenges doneIdeas={doneIdeas} />
    </div>
  );
}

export default Ideas;
