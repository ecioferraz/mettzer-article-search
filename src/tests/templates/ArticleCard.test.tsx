import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { ArticleCard } from '../../templates';

const ARTICLE_TITLE = 'h2[class="article-title"]';
const TOGGLE_FAVORITE = 'button[class="fav-btn"]';
const ARTICLE_TYPE = 'p[class="article-type"]';
const ARTICLE_AUTHORS = 'p[class="article-authors"';
const ARTICLE_DESCRIPTION = 'p[class="article-description"';
const ARTICLE_SOURCE = 'p[class="article-source"';
const ARTICLE_SOURCE_LINK = 'div[class="article-source-links"';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<ArticleCard />', () => {
    let articleCard: HTMLElement | null | undefined;

    describe('as multiple url sources', () => {
      beforeEach(() => {
        act(() => {
          root?.render(
            <ArticleCard
              authors={['test author1', 'test author2']}
              description='test description'
              id='test id'
              title='test title'
              type='test type'
              urls={['test url1', 'test url2']}
            />
          );
        });
  
        articleCard = container?.querySelector('.article-card');
      });
  
      it('should render a ArticleCard', () => {
        expect(articleCard).toBeTruthy();
        expect(articleCard?.children.length).toBe(7);
      });
  
      it('should render a <TextCard /> as the article\'s title', () => {
        const articleTitle = articleCard?.querySelector(ARTICLE_TITLE);
  
        expect(articleTitle).toBeTruthy();
        expect(articleTitle).toBeInstanceOf(HTMLHeadingElement);
        expect(articleTitle?.textContent).toBe('test title');
      });

      it('should render a toggle favorite <Button />', () => {
        const favBtn = articleCard?.querySelector(
          TOGGLE_FAVORITE,
        ) as HTMLButtonElement;

        expect(favBtn).toBeTruthy();
        expect(favBtn?.getAttribute('name')).toBe('unfav');

        act(() => favBtn?.click());

        expect(favBtn?.getAttribute('name')).toBe('fav');

        act(() => favBtn?.click());

        expect(favBtn?.getAttribute('name')).toBe('unfav');
      });

      it('should render a <TextCard /> as the article\'s type', () => {
        const articleType = articleCard?.querySelector(ARTICLE_TYPE);
  
        expect(articleType).toBeTruthy();
        expect(articleType).toBeInstanceOf(HTMLParagraphElement);
        expect(articleType?.textContent).toBe('test type');
      });
  
      it('should render a <TextCard /> as the article\'s authors', () => {
        const articleAuthors = articleCard?.querySelector(ARTICLE_AUTHORS);
  
        expect(articleAuthors).toBeTruthy();
        expect(articleAuthors).toBeInstanceOf(HTMLParagraphElement);
        expect(articleAuthors?.textContent).toBe('test author1, test author2');
      });
  
      it('should render a <TextCard /> as the article\'s description', () => {
        const articleDescription =
          articleCard?.querySelector(ARTICLE_DESCRIPTION);
  
        expect(articleDescription).toBeTruthy();
        expect(articleDescription).toBeInstanceOf(HTMLParagraphElement);
        expect(articleDescription?.textContent).toBe('test description');
      });
  
      it('should render a <TextCard /> as the article\'s sources', () => {
        const articleSource = articleCard?.querySelector(ARTICLE_SOURCE);
  
        expect(articleSource).toBeTruthy();
        expect(articleSource).toBeInstanceOf(HTMLParagraphElement);
        expect(articleSource?.textContent).toBe('Source: \n');
      });
  
      it('should render two <ExternalLink /> as the article\'s source links',
        () => {
          const articalSourceLink =
            articleCard?.querySelector(ARTICLE_SOURCE_LINK)?.children[0];
          const articalSourceLinkTwo =
          articleCard?.querySelector(ARTICLE_SOURCE_LINK)?.children[1];
    
          expect(articalSourceLink).toBeTruthy();
          expect(articalSourceLink).toBeInstanceOf(HTMLAnchorElement);
          expect(articalSourceLinkTwo).toBeTruthy();
          expect(articalSourceLinkTwo).toBeInstanceOf(HTMLAnchorElement);
        });
    });

    describe('as single url source', () => {
      beforeEach(() => {
        act(() => {
          root?.render(
            <ArticleCard
              authors={['test author1', 'test author2']}
              description='test description'
              id='test id'
              title='test title'
              type='test type'
              urls={['test url']}
            />
          );
        });
  
        articleCard = container?.querySelector('.article-card');
      });

      it('should render a <TextCard /> as the article\'s source', () => {
        const articleSource = articleCard?.querySelector(ARTICLE_SOURCE);
  
        expect(articleSource).toBeTruthy();
        expect(articleSource).toBeInstanceOf(HTMLParagraphElement);
        expect(articleSource?.textContent).toBe('Source: \n');
      });

      it('should render a <ExternalLink /> as the article\'s source link',
        () => {
          const articalSourceLinkOne =
            articleCard?.querySelector(ARTICLE_SOURCE_LINK)?.children[0];
          const articalSourceLinkTwo =
          articleCard?.querySelector(ARTICLE_SOURCE_LINK)?.children[1];
    
          expect(articalSourceLinkOne).toBeTruthy();
          expect(articalSourceLinkOne).toBeInstanceOf(HTMLAnchorElement);
          expect(articalSourceLinkTwo).toBe(undefined);
        });
    });
  });
});
