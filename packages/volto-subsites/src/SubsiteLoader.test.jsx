import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import SubsiteLoader from './SubsiteLoader';

vi.mock('react-redux', () => ({
  connect: () => (Component) => Component,
  useSelector: vi.fn(),
  useDispatch: () => vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(),
}));

vi.mock('@plone/volto/helpers', async (importOriginal) => ({
  ...(await importOriginal()),
  BodyClass: ({ className }) => (
    <div data-testid="body-class" data-classname={className} />
  ),
}));

const subsite = {
  '@id': 'http://localhost:8080/Plone/en/news',
  subsite_css_class: { token: 'news' },
};

const content = { '@components': { subsite } };

const atPath = (pathname) =>
  vi.mocked(useLocation).mockReturnValue({ pathname });

const withStore = (data) =>
  vi
    .mocked(useSelector)
    .mockImplementation((selector) => selector({ subsite: { data } }));

describe('SubsiteLoader', () => {
  it('adds the subsite classes on the subsite root', () => {
    withStore(subsite);
    atPath('/en/news');

    render(<SubsiteLoader content={content} />);

    expect(screen.getByTestId('body-class').dataset.classname).toBe(
      'subsite subsite-news subsite-root',
    );
  });

  it('adds the subsite classes without subsite-root below the root', () => {
    withStore(subsite);
    atPath('/en/news/article');

    render(<SubsiteLoader content={content} />);

    expect(screen.getByTestId('body-class').dataset.classname).toBe(
      'subsite subsite-news',
    );
  });

  it('adds the subsite classes from the content when the store has no subsite', () => {
    withStore(null);
    atPath('/en/news');

    render(<SubsiteLoader content={content} />);

    expect(screen.getByTestId('body-class').dataset.classname).toBe(
      'subsite subsite-news subsite-root',
    );
  });

  it('renders no body class when neither the store nor the content has a subsite', () => {
    withStore(null);
    atPath('/en/news');

    render(<SubsiteLoader content={{}} />);

    expect(screen.queryByTestId('body-class')).toBeNull();
  });

  it('renders no body class when the content has not loaded yet', () => {
    withStore(null);
    atPath('/');

    render(<SubsiteLoader content={null} />);

    expect(screen.queryByTestId('body-class')).toBeNull();
  });
});
