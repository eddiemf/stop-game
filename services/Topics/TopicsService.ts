import { ITopic } from '../../interfaces';

export const topicsServiceFactory = () => {
  const api = {
    addTopic: ({ id, name, isEditing }: ITopic) => {},
    updateTopic: ({ id, name, isEditing }: ITopic) => {},
    deleteTopic: (id: string) => {},
  };

  return api;
};
