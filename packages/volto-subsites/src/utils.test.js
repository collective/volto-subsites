import { describe, expect, it } from 'vitest';

import { isSubsiteRoot } from './utils';

const subsite = { '@id': 'http://localhost:8080/Plone/en/news' };

describe('isSubsiteRoot', () => {
  it('is true for the subsite root without a trailing slash', () => {
    expect(isSubsiteRoot('/en/news', subsite)).toBe(true);
  });

  it('is true for the subsite root with a trailing slash', () => {
    expect(isSubsiteRoot('/en/news/', subsite)).toBe(true);
  });

  it('is false for a child of the subsite', () => {
    expect(isSubsiteRoot('/en/news/article', subsite)).toBe(false);
  });

  it('is false when there is no subsite', () => {
    expect(isSubsiteRoot('/en/news', null)).toBe(false);
  });
});
