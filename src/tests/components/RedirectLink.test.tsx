import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { RedirectLink } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;
  
  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });
  
  afterAll(() => act(() => root?.unmount()));
  
  describe('<RedirectLink />', () => {
    let redirectLink: HTMLLinkElement | null | undefined;

    const onClick = jest.fn();
    
    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <RedirectLink
              className='test className'
              name='test name'
            />
          </BrowserRouter>
        );
      });

      redirectLink = container?.querySelector('.test');
    });

    it('should render a link', () => {
      expect(redirectLink).toBeTruthy();
    });

    it('should render RedirectLink\'s properties correctly', () => {
      expect(redirectLink?.getAttribute('class')).toBe('test className');
      expect(redirectLink?.getAttribute('href')).toBe('/');
    });

    it('should render redirectLink\'s inner text correctly', () => {
      expect(redirectLink?.textContent).toBe('test name');
    });

    it('should render a disabled and unclickable redirectLink', () => {
      act(() => redirectLink?.click());

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
