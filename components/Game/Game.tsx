import { TopicsBar } from '../TopicsSection';
import styles from './Game.module.scss';
import { PlayersBar } from './PlayersBar';

export const Game = () => {
  return (
    <div className={styles.game}>
      <div className={styles.mainColumn}>
        <div className={styles.logo}>S T O P</div>
        <PlayersBar players={[{ id: '1', name: 'Badbad' }]} />
      </div>
      <TopicsBar />
    </div>
  );
};
