import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { TextCard } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => act(() => root?.unmount()));

  describe('<TextCard />', () => {
    let textCard: HTMLParagraphElement | HTMLHeadingElement | null | undefined;

    describe('as heading element', () => {
      beforeEach(() => {
        act(() => {
          root?.render(
            <TextCard
              as='h1'
              className='test className'
              text='test text'
            />
          );
        });

        textCard = container?.querySelector('h1');
      });

      afterEach(() => {
        textCard = null;
      });

      it('should render a div', () => {
        expect(textCard).toBeTruthy();
      });

      it('should render a h1 element inside of the div', () => {
        expect(textCard?.className).toBe('test className');
        expect(textCard?.tagName).toBe('H1');
        expect(textCard?.textContent).toBe('test text');
      });
    });

    describe('as paragraph element', () => {
      beforeEach(() => {
        act(() => {
          root?.render(
            TextCard({
              as: 'p',
              className: 'test className',
              text: 'test text',
            })
          );
        });

        textCard = container?.querySelector('p');
      });

      afterEach(() => {
        textCard = null;
      });

      it('should render a div', () => {
        expect(textCard).toBeTruthy();
      });

      it('should render a paragraph element inside of the div', () => {
        expect(textCard?.className).toBe('test className');
        expect(textCard?.tagName).toBe('P');
        expect(textCard?.textContent).toBe('test text');
      });
    });
  });
});
