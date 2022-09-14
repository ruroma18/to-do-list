import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import IdeaCard from "../IdeaCard/IdeaCard";


const IdeaSlider = ({setMyIdeas, myIdeas, setTaskDone}) => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  const changeVisability = (current) => {
    const newMyIdeas = myIdeas.map((idea, index) => ({
      ...idea,
      isCurrent: index === current,
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
    <div>
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
        <div style={{textAlign: "center"}}>{` ${
          myIdeas.length === 1 ? 1 : currentSlideIndex
        } / ${myIdeas.length}`}</div>
      </>
    </div>
  );
};

export default IdeaSlider;
