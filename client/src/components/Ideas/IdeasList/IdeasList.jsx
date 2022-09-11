import React from "react";
import rewritreLocalStorage from "../../../utils/rewriteLocalStorage";
import setDataToLocalStorage from "../../../utils/writeLocalStorage";
import IdeaSlider from "../IdeaSlider/IdeaSlider";
import styles from "./IdeasList.module.scss";


const IdeasList = ({
  myIdeas,
  setMyIdeas,
  achievements,
  setAchievements,
  setDoneIdeas,
}) => {
  

  const countAchievements = (idea) => {
    const existingAchievement = achievements.find(
      (item) => item.type === idea.type
    );

    if (existingAchievement) {
      setAchievements(
          (prevState) => prevState.map(
              (item) => item.type === idea.type ? { ...item, count: item.count + 1 } : item
          )
      )
      return rewritreLocalStorage("achievements", achievements)
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
        const newDoneIdea = { ...idea, isDone: true, date: Date.now() };
        setDoneIdeas((prevState) => [...prevState, newDoneIdea]);
        setDataToLocalStorage("doneIdeas", newDoneIdea);
        countAchievements(idea);
        myIdeas.splice(i, 1);
        rewritreLocalStorage("myIdeas", myIdeas)
        changeCurrentSlide(i);
      }
      return myIdeas;
    });
  };
  

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Idea in my list</h2>
      <div className={styles.sliderWrapper}>
        {myIdeas.length === 0 ? (
          <div className={styles.noCards}>Add ideas in your list</div>
        ) : (
          <IdeaSlider setMyIdeas={setMyIdeas} myIdeas={myIdeas} setTaskDone={setTaskDone} />          
        )}
      </div>
    </section>
  );
};

export default IdeasList;
