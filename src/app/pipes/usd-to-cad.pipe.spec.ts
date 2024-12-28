import { UsdToCadPipe } from '../usd-to-cad.pipe';

describe('UsdToCadPipe', () => {
  it('create an instance', () => {
    const pipe = new UsdToCadPipe();
    expect(pipe).toBeTruthy();
  });
});
