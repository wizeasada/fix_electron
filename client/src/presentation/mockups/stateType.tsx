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
  elements: TElement[];
};
type TWorkSpace = {
  id: string;
  name: string;
  icon_file: string;
  elements: [TElement[], TElement[], TElement[]];
  members: (TParticipatingMember | TOfferingMember)[];
};
export type TState = {
  loggedInUser: Omit<User, 'password'>; //ログイン中のユーザーの情報
  currentWorkSpaceId: string; //現在選択されているワークスペースのID
  workSpaces: TWorkSpace[]; //全ワークスペース
};
// export const state: TState = {
//   loggedInUser: {
//     id: 'aaaaa',
//     name: 'TaroYamada',
//     mail_address: 'taro@gmail.com',
//   },
//   currentWorkSpaceId: '11111',
//   workSpaces: [
//     {
//       id: '11111',
//       name: 'プロジェクト',
//       icon_file: 'upload.png',
//       elements: [
//         {
//           id: '1',
//           name: '日経さん',
//           link: 'https://nikkei.com',
//           elements: [
//             {
//               id: '2',
//               name: 'SEEKS',
//               link: 'https://nikkei2.com',
//               elements: [
//                 { id: '3', name: '本番環境', link: 'https://nikkei3.com', elements: [] },
//                 { id: '4', name: '検証環境', link: 'https://nikkei4.com', elements: [] },
//                 { id: '5', name: 'ZenHub', link: 'https://nikkei5.com', elements: [] },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
