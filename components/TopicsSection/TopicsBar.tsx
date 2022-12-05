import { Topic } from './Topic/Topic';
import styles from './TopicsBar.module.scss';
import { useTopics } from './useTopics';

export const TopicsBar = () => {
  const { topics, addTopic, updateTopic, deleteTopic, shouldFocusNewTopic } = useTopics();

  return (
    <div className={styles.topics}>
      <div className={styles.columns}>
        {topics.map((topic) => (
          <Topic
            key={topic.id}
            {...topic}
            updateTopic={updateTopic}
            deleteTopic={deleteTopic}
            shouldFocus={shouldFocusNewTopic}
          />
        ))}
      </div>

      <button onClick={addTopic} className={styles.addTopicButton}>
        Add topic
      </button>
    </div>
  );
};
