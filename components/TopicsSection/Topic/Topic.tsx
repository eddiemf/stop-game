import React from 'react';
import { ITopic } from '../../../interfaces';
import styles from './Topic.module.scss';
import { TopicActions } from './TopicActions';

interface IProps {
  id: string;
  name: string;
  isEditing: boolean;
  updateTopic: (topic: ITopic) => void;
  deleteTopic: (topicId: string) => void;
  shouldFocus: boolean;
}

const enterKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
  return event.key === 'Enter';
};

export const Topic = ({
  id,
  isEditing,
  name,
  updateTopic,
  deleteTopic,
  shouldFocus: shouldFocusProp,
}: IProps) => {
  const [newName, setNewName] = React.useState(name);
  const [shouldFocus, setShouldFocus] = React.useState(shouldFocusProp);
  const saveTopic = () => {
    updateTopic({ id, name: newName, isEditing: false });
    setShouldFocus(false);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus, inputRef]);

  return (
    <div className={styles.topic}>
      <TopicActions
        updateTopic={updateTopic}
        onEditButtonClick={() => setShouldFocus(true)}
        deleteTopic={deleteTopic}
        topic={{ id, name, isEditing }}
      />

      {isEditing ? (
        <div>
          <input
            ref={inputRef}
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            onKeyPress={(event) => enterKeyPressed(event) && saveTopic()}
          />
          <button onClick={() => saveTopic()} className={styles.saveButton}>
            Save
          </button>
        </div>
      ) : (
        <p>
          <span>{name}</span>
        </p>
      )}
    </div>
  );
};
