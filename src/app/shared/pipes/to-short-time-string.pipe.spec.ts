import { ToShortTimeStringPipe } from './to-short-time-string.pipe';

describe('ToShortTimeStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ToShortTimeStringPipe();
    expect(pipe).toBeTruthy();
  });
});
