import { addFunc } from '../sample';

describe('/path', () => {
  describe('addFunc', () => {
    it('第一引数と第二引数の合計を返す', () => {
      expect(addFunc(1, 1)).toBe(2);
    });
    it('第一引数と第二引数の合計を返す', () => {
      expect(addFunc(1, 2)).not.toBe(1);
    });
  });
});
