import styles from './app.module.scss'
import TodoApp from './components/todoApp';

function App() {
  return (
    <div className={styles.App}>
      <TodoApp />
    </div>
  );
}

export default App;
