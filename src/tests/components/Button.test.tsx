import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Button } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => act(() => root?.unmount()));

  describe('<Button />', () => {
    let button: HTMLButtonElement | null | undefined;

    const onClick = jest.fn();

    describe('as text button name', () => {
      beforeEach(async () => {
        act(() =>
          root?.render(
            <Button
              className='test className'
              handleClick={onClick}
              name='test name'
              type='button'
            />
          )
        );
  
        button = container?.querySelector('button');
      });
  
      afterEach(() => (button = null));
  
      it('should render a button', () => {
        expect(button).toBeTruthy();
      });
  
      it('should render button\'s properties correctly', () => {
        expect(button?.getAttribute('class')).toBe('test className');
        expect(button?.getAttribute('name')).toBe('test name');
        expect(button?.getAttribute('type')).toBe('button');
      });
  
      it('should render a clickable button', () => {
        expect(button).not.toBeDisabled();
  
        act(() => button?.click());
  
        expect(onClick).toHaveBeenCalled();
      });
  
      it('should render a disabled and unclickable button', () => {
        expect(button).not.toBeDisabled();
        button && (button.disabled = true);
        expect(button).toBeDisabled();
  
        act(() => button?.click());
  
        expect(onClick).not.toHaveBeenCalled();
      });
    });

    describe('as unfavorited IconType button', () => {
      beforeEach(async () => {
        act(() =>
          root?.render(
            <Button
              className='test className'
              handleClick={onClick}
              name='unfav'
              type='button'
            />
          )
        );
    
        button = container?.querySelector('button');
      });
    
      afterEach(() => (button = null));
    
      it('should render a unfavorited Icon as a button\'s inner content',
        () => {
          expect(button?.children[0]).not.toHaveAttribute('color');
        });
    });

    describe('as favorited IconType button', () => {
      beforeEach(async () => {
        act(() =>
          root?.render(
            <Button
              className='test className'
              handleClick={onClick}
              name='fav'
              type='button'
            />
          )
        );
    
        button = container?.querySelector('button');
      });
    
      afterEach(() => (button = null));
    
      it('should render a unfavorited Icon as a button\'s inner content',
        () => {
          expect(button?.children[0]).toHaveAttribute('color');
        });
    });
  });
});
