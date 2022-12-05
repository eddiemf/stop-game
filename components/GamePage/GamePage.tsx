import React from 'react';
import { Game } from '../Game';
import styles from './GamePage.module.scss';

export const GamePage = () => {
  return (
    <div id="game-page" className={styles.page}>
      <Game />
    </div>
  );
};
