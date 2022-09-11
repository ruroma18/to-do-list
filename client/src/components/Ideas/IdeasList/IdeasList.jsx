import React, { useState } from "react";
import IdeaCard from "../IdeaCard/IdeaCard";
import rewritreLocalStorage from "../../../utils/rewriteLocalStorage";
import setDataToLocalStorage from "../../../utils/writeLocalStorage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./IdeasList.module.scss";
import "./slider.css";

const IdeasList = ({
  myIdeas,
  setMyIdeas,
  achievements,
  setAchievements,
  setDoneIdeas,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

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
      rewritreLocalStorage("achievements", achievements)
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

  const changeVisability = (current) => {
    const newMyIdeas = myIdeas.map((idea, index) => ({
      ...idea,
      isCurrent:
        index === current ? (idea.isCurrent = true) : (idea.isCurrent = false),
    }));
    return setMyIdeas(newMyIdeas);
  };

  const slideSetting = {
    centerMode: true,
    infinite: false,
    centerPadding: "33%",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => [
      changeVisability(current),
      setCurrentSlideIndex(current + 1),
    ],
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Idea in my list</h2>
      <div className={styles.sliderWrapper}>
        {myIdeas.length === 0 ? (
          <div className={styles.noCards}>Add ideas in your list</div>
        ) : (
          <>
            <Slider {...slideSetting}>
              {myIdeas.map((idea) =>
                idea.isDone === false ? (
                  <div key={idea.key} onClick={() => setTaskDone(idea.key)}>
                    <IdeaCard
                      task={idea.activity}
                      type={idea.type}
                      isCurrent={idea.isCurrent}
                    />
                  </div>
                ) : (
                  false
                )
              )}
            </Slider>
            <div className={styles.sliderPagination}>{` ${
              myIdeas.length === 1 ? 1 : currentSlideIndex
            } / ${myIdeas.length}`}</div>
          </>
        )}
      </div>
    </section>
  );
};

export default IdeasList;
