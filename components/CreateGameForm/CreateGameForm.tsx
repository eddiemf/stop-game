import { useState } from 'react';
import styles from './CreateGameForm.module.scss';

export const CreateGameForm = () => {
  const [playerName, setPlayerName] = useState('');
  const [gameName, setGameName] = useState('');

  const handleSubmit = ({ playerName, gameName }: { playerName: string; gameName: string }) => {
    console.log('submitting');
    //   const gameStore = getGameStore();
    //   const player = gameStore.createPlayer(playerName);
    //   gameStore.setAdminPlayer(player);
    //   history.push('/game');
  };

  return (
    <div className={styles.form}>
      <input
        className={styles.textInput}
        type="text"
        name="player-name"
        placeholder="Player name"
        onChange={({ target }) => setPlayerName(target.value)}
        value={playerName}
      />

      <input
        className={styles.textInput}
        type="text"
        name="game-name"
        placeholder="Game name"
        onChange={({ target }) => setGameName(target.value)}
        value={gameName}
      />

      <button
        className={styles.submitButton}
        onClick={() => handleSubmit({ playerName, gameName })}
      >
        Play
      </button>
    </div>
  );
};
