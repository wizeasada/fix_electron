import { TState } from './stateType';

const mockLoggedInUserObj = {
  id: 'aaaaa',
  name: 'TaroYamada',
  mail_address: 'taro@gmail.com',
} as const;

const mockCurrentWorkSpaceId = '11111111111';

export const USER_TEMPLATE: TState = {
  loggedInUser: mockLoggedInUserObj,
  currentWorkSpaceId: mockCurrentWorkSpaceId,
  workSpaces: [],
};
