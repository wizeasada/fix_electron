import { repeat } from 'ramda';

////TODO:要件確認後、LINK_TEMPLATEに型を付ける
export const LINK_TEMPLATE = {
  id: '2',
  name: 'SEEKS',
  link: 'https://nikkei2.com',
  elements: [
    {
      id: '3',
      name: 'プロダクション環境',
      link: 'https://nikkei3.com',
      elements: [
        {
          id: '6',
          name: '本番環境',
          link: 'https://nikkei3.com',
          elements: [{ id: '8', name: 'テスト', link: 'https://nikkei3.com', elements: [] }],
        },
        { id: '7', name: 'デモ本番環境', link: 'https://nikkei3.com', elements: [] },
      ],
    },
    { id: '4', name: '検証環境', link: 'https://nikkei4.com', elements: [] },
    { id: '5', name: 'ZenHub', link: 'https://nikkei5.com', elements: [] },
  ],
};

export const LINKS = repeat(LINK_TEMPLATE, 10);
