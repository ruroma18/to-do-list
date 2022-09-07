import styles from './App.module.scss';
import Achievements from './components/Achievements/Achievements';
import FreshIdeas from './components/FreshIdeas/FreshIdeas';
import IdeasList from './components/IdeasList/IdeasList';

function App() {
  return (
    <div className={styles.container}>
      <FreshIdeas />
      <IdeasList />
      <Achievements />

    </div>
  );
}

export default App;
