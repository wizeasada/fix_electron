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

type TElementsBlock = TElement[][] | TElement[] | [];

type TWorkSpace = {
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

const mockLoggedInUserObj = {
  id: 'aaaaa',
  name: 'TaroYamada',
  mail_address: 'taro@gmail.com',
} as const;

const mockCurrentWorkSpaceId = '11111111111';

const mockMemberObj = {
  id: '123456789',
  isAdmin: false,
  userId: '123456789',
  userName: 'ワイズ',
} as const;

export const state: TState = {
  loggedInUser: mockLoggedInUserObj,
  currentWorkSpaceId: mockCurrentWorkSpaceId,
  workSpaces: [
    {
      id: '1',
      name: 'プロジェクト',
      iconFile: 'upload.png',
      threeAggElementsBlocks: [
        [
          {
            id: '2',
            name: 'SEEKS',
            link: 'https://nikkei2.com',
            elements: [
              { id: '3', name: '本番環境', link: 'https://nikkei3.com', elements: [] },
              { id: '4', name: '検証環境', link: 'https://nikkei4.com', elements: [] },
              { id: '5', name: 'ZenHub', link: 'https://nikkei5.com', elements: [] },
            ],
          },
        ],
        [[]],
        [[]],
      ],
      members: [mockMemberObj],
    },
  ],
};
