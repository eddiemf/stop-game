import React from 'react';
import { CreateGameForm } from '../CreateGameForm';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div id="home-page" className={styles.page}>
      <h1 className={styles.title}>Stop Game</h1>
      <CreateGameForm />
    </div>
  );
};
