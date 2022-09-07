import React from "react";
import IdeaCard from "../IdeaCard/IdeaCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./IdeasList.module.scss";

const IdeasList = () => {
  const slidetSetting = {
    centerMode: true,
    infinite: true,
    centerPadding: "-1%",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Idea in my list</h2>
      <div className={styles.sliderWrapper}>
        <Slider className={styles.slickList} {...slidetSetting}>
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
        </Slider>
      </div>
    </section>
  );
};

export default IdeasList;
