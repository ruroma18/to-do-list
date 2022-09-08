import React from "react";
import IdeaCard from "../IdeaCard/IdeaCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./IdeasList.module.scss";

const IdeasList = ({ myIdeas }) => {
  const slidetSetting = {
    centerMode: true,
    infinite: true,
    centerPadding: "-6%",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Idea in my list</h2>
      <div className={styles.sliderWrapper}>
        {myIdeas.length === 0 ? (
          <div>No ideas in your list</div>
        ) : (
          <Slider className={styles.slickList} {...slidetSetting}>
            {myIdeas.map((idea) => (
              <IdeaCard key={idea.key} task={idea.activity} type={idea.type} />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default IdeasList;
