import styles from './App.module.scss';
import FreshIdeas from './components/FreshIdeas/FreshIdeas';
import IdeasList from './components/IdeasList/IdeasList';

function App() {
  return (
    <div className={styles.container}>
      <FreshIdeas />
      <IdeasList />

    </div>
  );
}

export default App;
