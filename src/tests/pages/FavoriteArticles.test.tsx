import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { FavoriteArticles } from '../../pages';

const SEARCH_INPUT = 'input[class="search-input"]';
const PREVIOUS_BTN = 'button[class="previous-btn"]';
const NEXT_BTN = 'button[class="next-btn"]';

describe('Pages', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<FavoriteArticles />', () => {
    let favoriteArticles: HTMLElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <FavoriteArticles />
          </BrowserRouter>
        );
      });

      favoriteArticles = container?.querySelector('main');
    });

    afterEach(() => jest.restoreAllMocks());

    it('should render a form', () => {
      expect(favoriteArticles).toBeTruthy();
      expect(favoriteArticles?.children.length).toBe(3);
    });

    it('should render a <TextInput />'
    + 'and a loading message in the Favorite Articles page',
    () => {
      const searchInput = favoriteArticles?.querySelector(
        SEARCH_INPUT,
      ) as HTMLInputElement;
      
      expect(searchInput).toBeTruthy();
      expect(searchInput).toBeInstanceOf(HTMLInputElement);
    });

    it('should render a previous and a next <Button />', () => {
      const previousBtn = favoriteArticles?.querySelector(PREVIOUS_BTN);
      const nextBtn = favoriteArticles?.querySelector(NEXT_BTN);

      expect(previousBtn && nextBtn).toBeTruthy();
      expect(previousBtn && nextBtn).toBeInstanceOf(HTMLButtonElement);
      expect(previousBtn && nextBtn).toBeDisabled();
    });
  });
});
