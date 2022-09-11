import React from 'react';
import { useEffect, useState } from "react";
import { getTask } from "../../api";
import setDataToLocalStorage from "../../utils/writeLocalStorage";
import getDataFromLocalStorage from "../../utils/getLocalStorage";
import rewritreLocalStorage from "../../utils/rewriteLocalStorage";
import styles from "./Ideas.module.scss";
import Achievements from "./Achievements/Achievements";
import CompletedChallenges from "./CompletedChallenges/CompletedChallenges";
import FreshIdeas from "./FreshIdeas/FreshIdeas";
import IdeasList from "./IdeasList/IdeasList";

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

  const checkIsExist = (data) => {
    const existIdea = ideas.find((idea) => idea.key === data.key);
    const existMyIdea = myIdeas.find((idea) => idea.key === data.key);
    const existDoneIdea = doneIdeas.find((idea) => idea.key === data.key);
    if (!existIdea && !existMyIdea && !existDoneIdea) {
      return data;
    }
  };

  useEffect(() => {
    if (ideas.length < 4) {
      getTask().then((data) => setIdeas([...ideas, checkIsExist(data)]));
    }
  }, [ideas.length]);

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

  const countAchievements = (idea) => {
    const existingAchievement = achievements.find(
      (item) => item.type === idea.type
    );

    if (existingAchievement) {
      return setAchievements((prevState) =>
        prevState.map((item) => {
          const updatedAchievement = { ...item, count: item.count + 1 };
          if (item.type === idea.type) {
            rewritreLocalStorage("achievements", updatedAchievement);
            return updatedAchievement;
          }
          return prevState;
        })
      );
    }

    const newAchievement = { type: idea.type, count: 1 };
    setAchievements((prevState) => [...prevState, newAchievement]);
    setDataToLocalStorage("achievements", newAchievement);
  };

  const changeCurrentSlide = (i) => {
    if (i === myIdeas.length && myIdeas.length >= 2) {
      return (myIdeas[i - 1].isCurrent = true);
    } else if (myIdeas.length === 1) {
      return (myIdeas[0].isCurrent = true);
    } else if (myIdeas.length !== 0) {
      myIdeas[i].isCurrent = true;
    }
  };

  const setTaskDone = (taskKey) => {
    myIdeas.map((idea, i) => {
      if (taskKey === idea.key && idea.isCurrent === true) {
        const newDoneIdea = { ...idea, date: Date.now() };
        setDoneIdeas((prevState) => [...prevState, newDoneIdea]);
        setDataToLocalStorage("doneIdeas", newDoneIdea);
        countAchievements(idea);
        myIdeas.splice(i, 1);
        changeCurrentSlide(i);
      }
      return myIdeas;
    });
  };

  return (
    <div className={styles.container}>
      <FreshIdeas ideas={ideas} addTaskToList={addTaskToList} />
      <IdeasList
        myIdeas={myIdeas}
        setMyIdeas={setMyIdeas}
        setTaskDone={setTaskDone}
      />
      <Achievements achievements={achievements} />
      <CompletedChallenges doneIdeas={doneIdeas} />
    </div>
  );
}

export default Ideas;
