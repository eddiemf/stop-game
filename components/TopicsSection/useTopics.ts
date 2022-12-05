import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITopic } from '../../interfaces';
import { topicsService } from '../../services/Topics';

export const useTopics = () => {
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [shouldFocusNewTopic, setShouldFocusNewTopic] = useState(false);

  const addTopic = () => {
    const id = uuidv4();
    const newTopic = { id, name: '', isEditing: true };
    setTopics([...topics, newTopic]);
    topicsService.addTopic(newTopic);
    setShouldFocusNewTopic(true);
  };

  const updateTopic = (topic: ITopic) => {
    const topicIndex = topics.findIndex(({ id }) => id === topic.id);
    const newTopics = [...topics.slice(0, topicIndex), topic, ...topics.slice(topicIndex + 1)];

    topicsService.updateTopic(topic);
    setTopics(newTopics);
    setShouldFocusNewTopic(false);
  };

  const deleteTopic = (topicId: string) => {
    setTopics(topics.filter(({ id }) => id !== topicId));
    topicsService.deleteTopic(topicId);
  };

  return {
    topics,
    addTopic,
    updateTopic,
    deleteTopic,
    shouldFocusNewTopic,
  };
};
