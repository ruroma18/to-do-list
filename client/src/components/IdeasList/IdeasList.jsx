import React from "react";
import IdeaCard from "../IdeaCard/IdeaCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./IdeasList.module.scss";
import "./slider.css";

const IdeasList = ({ myIdeas, setMyIdeas }) => {
  
  const changeVisability = (current) => {
    const newMyIdeas = myIdeas.map((idea, index) => ({
      ...idea,
      isCurrent: index === current ? idea.isCurrent = true : idea.isCurrent = false,
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
    afterChange: (current) => changeVisability(current),
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Idea in my list</h2>
      <div className={styles.sliderWrapper}>
        {myIdeas.length === 0 ? (
          <div>No ideas in your list</div>
        ) : (
          <Slider {...slideSetting}>
            {myIdeas.map((idea) => (
              <IdeaCard
                key={idea.key}
                task={idea.activity}
                type={idea.type}
                isCurrent={idea.isCurrent}
              />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default IdeasList;
