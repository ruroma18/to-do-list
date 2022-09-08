import { useEffect, useState } from 'react';
import { getTask } from './api';
import styles from './App.module.scss';
import Achievements from './components/Achievements/Achievements';
import CompletedChallenges from './components/CompletedChallenges/CompletedChallenges';
import FreshIdeas from './components/FreshIdeas/FreshIdeas';
import IdeasList from './components/IdeasList/IdeasList';

function App() {

  const [ideas, setIdeas] = useState([])


  useEffect(() => {
    if(ideas.length < 4) {
      getTask().then((data) => setIdeas([...ideas, {...data, isDone: null}])) }
  }, [ideas.length]);

  console.log(ideas)

  return (
    <div className={styles.container}>
      <FreshIdeas ideas={ideas}/>
      <IdeasList />
      <Achievements />
      <CompletedChallenges />

    </div>
  );
}

export default App;
