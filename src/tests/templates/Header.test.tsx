import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../templates';

const HOME_LINK = 'a[class="home-link"]';
const FAVORITES_LINK = 'a[class="favorites-link"]';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<Header />', () => {
    let header: HTMLHeadElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        );
      });

      header = container?.querySelector('header');
    });

    it('should render a form', () => {
      expect(header).toBeTruthy();
      expect(header?.children.length).toBe(1);
    });

    it('should render a <RedirectLink /> for the home page', () => {
      const homeLink = header?.querySelector(HOME_LINK);

      expect(homeLink).toBeTruthy();
      expect(homeLink).toBeInstanceOf(HTMLAnchorElement);
    });

    it('should render a <RedirectLink /> for the favorites page', () => {
      const favoritesLink = header?.querySelector(FAVORITES_LINK);

      expect(favoritesLink).toBeTruthy();
      expect(favoritesLink).toBeInstanceOf(HTMLAnchorElement);
    });
  });
});
