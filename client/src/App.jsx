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

  useEffect(() => {
    if (ideas.length < 4) {
      getTask().then((data) => setIdeas([...ideas, data]));
    }
  }, [ideas.length, myIdeas.length, ideas]);

  const addTaskToList = (taskKey) => {
    ideas.map((idea, i) => {
      if (taskKey === idea.key) {
        setMyIdeas([...myIdeas, idea]);
        ideas.splice(i, 1);
      }
      return ideas
    });
  };

  return (
    <div className={styles.container}>
      <FreshIdeas ideas={ideas} addTaskToList={addTaskToList} />
      <IdeasList myIdeas={myIdeas} />
      <Achievements />
      <CompletedChallenges />
    </div>
  );
}

export default App;
