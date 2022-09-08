import React from 'react';
import { fireEvent } from '@testing-library/react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../../pages';

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

  describe('<Home />', () => {
    let home: HTMLElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        );
      });

      home = container?.querySelector('main');
    });

    afterEach(() => jest.restoreAllMocks());

    it('should render a form', () => {
      expect(home).toBeTruthy();
      expect(home?.children.length).toBe(4);
    });

    it('should render a <TextInput /> and a loading message in the home page',
      () => {
        const searchInput = home?.querySelector(
          SEARCH_INPUT,
        ) as HTMLInputElement;
      
        expect(searchInput).toBeTruthy();
        expect(searchInput).toBeInstanceOf(HTMLInputElement);
      
        fireEvent.change(searchInput, { target: { value: 'test' } });

        const loading = home?.querySelector('.loading') as HTMLSpanElement;

        expect(searchInput.value).toBe('test');
        expect(loading).toBeInTheDocument();
      });

    it('should render a previous and a next <Button />', () => {
      const previousBtn = home?.querySelector(PREVIOUS_BTN);
      const nextBtn = home?.querySelector(NEXT_BTN);

      expect(previousBtn && nextBtn).toBeTruthy();
      expect(previousBtn && nextBtn).toBeInstanceOf(HTMLButtonElement);
      expect(previousBtn && nextBtn).toBeDisabled();
    });
  });
});
