import { TWorkSpace } from './stateType';

export const WORKSPACE_TEMPLATE: TWorkSpace[] = [
  {
    id: '1',
    name: 'Projects',
    iconFile: 'upload.png',
    threeAggElementsBlocks: [
      [
        {
          id: '2',
          name: 'SEEKS',
          link: 'https://nikkei2.com',
          elements: [
            {
              id: '3',
              name: '本番環境',
              link: 'https://nikkei3.com',
              elements: [{ id: '6', name: '本番環境', link: 'https://nikkei3.com', elements: [] }],
            },
            { id: '4', name: '検証環境', link: 'https://nikkei4.com', elements: [] },
            { id: '5', name: 'ZenHub', link: 'https://nikkei5.com', elements: [] },
          ],
        },
      ],
      [[]],
      [[]],
    ],
    members: [
      {
        id: '123456789',
        isAdmin: false,
        userId: '123456789',
        userName: 'ワイズ',
      },
    ],
  },
];
