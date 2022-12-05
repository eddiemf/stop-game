import { IPlayer } from '../../../interfaces';
import { PlayerName } from './PlayerName';
import styles from './PlayersBar.module.scss';

interface IProps {
  players: IPlayer[];
}

export const PlayersBar = ({ players }: IProps) => {
  return (
    <div className={styles.players}>
      {players.map(({ name }) => (
        <PlayerName name={name} key={name} />
      ))}
    </div>
  );
};
