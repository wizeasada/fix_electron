type User = {
  id: string;
  name: string;
  password: string;
  mail_address: string;
};

type TMember = {
  id: string;
  isAdmin: false;
};

type TParticipatingMember = TMember & {
  userId: string;
  userName: string;
};
type TOfferingMember = TMember & {
  mail_address: string;
};

type TElement = {
  id: string;
  name: string;
  link: string;
  elements: TElement[][] | TElement[] | [];
};

type TElementsBlock = TElement[][] | TElement[] | TElement | [];

export type TWorkSpace = {
  id: string;
  name: string;
  iconFile: string;
  threeAggElementsBlocks: [TElementsBlock, TElementsBlock, TElementsBlock];
  members: (TParticipatingMember | TOfferingMember)[];
};

export type TState = {
  loggedInUser: Omit<User, 'password'>; //ログイン中のユーザーの情報
  currentWorkSpaceId: string; //現在選択されているワークスペースのID
  workSpaces: TWorkSpace[] | []; //全ワークスペース
};
