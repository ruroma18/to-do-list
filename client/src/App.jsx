import { useEffect, useState } from "react";
import { getTask } from "./api";
import styles from "./App.module.scss";
import Achievements from "./components/Achievements/Achievements";
import CompletedChallenges from "./components/CompletedChallenges/CompletedChallenges";
import FreshIdeas from "./components/FreshIdeas/FreshIdeas";
import IdeasList from "./components/IdeasList/IdeasList";

function App() {
  const [ideas, setIdeas] = useState([]);
  const [myIdeas, setMyIdeas] = useState([]);
  const [doneIdeas, setDoneIdeas] = useState([]);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (ideas.length < 4) {
      getTask().then((data) => setIdeas([...ideas, data]));
    }
  }, [ideas.length, ideas]);

  const addTaskToList = (taskKey) => {
    ideas.map((idea, i) => {
      if (taskKey === idea.key) {
        setMyIdeas([
          ...myIdeas,
          {
            ...idea,
            isDone: false,
            isCurrent: myIdeas.length === 0 ? true : false,
          },
        ]);
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
        prevState.map((item) =>
          item.type === idea.type ? { ...item, count: item.count + 1 } : item
        )
      );
    }

    setAchievements((prevState) => [
      ...prevState,
      { type: idea.type, count: 1 },
    ]);
  };

  const setTaskDone = (taskKey) => {
    myIdeas.map((idea, i) => {
      if (taskKey === idea.key) {
        setDoneIdeas([...doneIdeas, idea]);
        countAchievements(idea);
        myIdeas.splice(i, 1);
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

export default App;
