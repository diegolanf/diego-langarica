import { removeLeadingSlash, removeQueryStringsFromUrl } from './string';

const TEST_ROUTE = 'routine/runner';

describe('removeLeadingSlash', () => {
  it('should remove leading slash', () => {
    expect(removeLeadingSlash(`/${TEST_ROUTE}`)).toBe(TEST_ROUTE);
  });

  it('should return unmodified string if no leading slash is present', () => {
    expect(removeLeadingSlash(TEST_ROUTE)).toBe(TEST_ROUTE);
  });
});

describe('removeQueryStringsFromUrl', () => {
  it('should keep string unmodified if it does not contain ?', () => {
    expect(removeQueryStringsFromUrl(TEST_ROUTE)).toBe(TEST_ROUTE);
  });

  it('should remove everything after ?', () => {
    expect(removeQueryStringsFromUrl(`${TEST_ROUTE}?id=1234`)).toBe(TEST_ROUTE);
  });
});
