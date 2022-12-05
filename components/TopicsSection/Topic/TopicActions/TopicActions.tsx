import { ITopic } from '../../../../interfaces';
import styles from './TopicActions.module.scss';

interface IProps {
  topic: ITopic;
  updateTopic: (topic: ITopic) => void;
  deleteTopic: (topicId: string) => void;
  onEditButtonClick: () => void;
}

export const TopicActions = ({ updateTopic, deleteTopic, onEditButtonClick, topic }: IProps) => {
  const { name, isEditing, id } = topic;

  const handleEditButtonClick = () => {
    updateTopic({ id, name, isEditing: true });
    onEditButtonClick();
  };

  return (
    <div className={styles.topicActions}>
      {!isEditing && (
        <button
          onClick={() => handleEditButtonClick()}
          className={`${styles.action} ${styles.editAction}`}
          title="Edit"
        >
          E
        </button>
      )}

      <button
        onClick={() => deleteTopic(id)}
        className={`${styles.action} ${styles.deleteAction}`}
        title="Delete"
      >
        Delete
      </button>
    </div>
  );
};
