import styles from './PlayerName.module.scss';

interface IProps {
  name: string;
}

export const PlayerName = ({ name }: IProps) => {
  return <div className={styles.player}>{name}</div>;
};
