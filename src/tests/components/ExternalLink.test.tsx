import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { ExternalLink } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;
  
  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });
  
  afterAll(() => act(() => root?.unmount()));
  
  describe('<ExternalLink />', () => {
    let externalLink: HTMLAnchorElement | null | undefined;
    
    beforeEach(() => {
      act(() => {
        root?.render(
          <ExternalLink
            className='test className'
            i={0}
            url='test url'
          />
        );
      });

      externalLink = container?.querySelector('.test');
    });

    it('should render a link', () => {
      expect(externalLink).toBeTruthy();
    });

    it('should render ExternalLink\'s properties correctly', () => {
      expect(externalLink?.getAttribute('class')).toBe('test className');
      expect(externalLink?.getAttribute('href')).toBe('test url');
      expect(externalLink?.getAttribute('target')).toBe('_blank');
      expect(externalLink?.getAttribute('rel')).toBe('noreferrer noopener');
    });
  });
});
