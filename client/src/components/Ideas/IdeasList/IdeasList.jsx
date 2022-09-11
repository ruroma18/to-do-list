import React, { useState } from "react";
import IdeaCard from "../IdeaCard/IdeaCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./IdeasList.module.scss";
import "./slider.css";

const IdeasList = ({ myIdeas, setMyIdeas, setTaskDone }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  const toggleTaskIsDone = (key) => setTaskDone(key);

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
                  <div
                    key={idea.key}
                    onClick={() => toggleTaskIsDone(idea.key)}
                  >
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
